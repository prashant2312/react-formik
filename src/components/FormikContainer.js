import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const dropdownOptions=[
        {key:'Select an option',value:''},
        {key:'option 1',value:'option1'},
        {key:'option 2',value:'option2'},
        {key:'option 3',value:'option3'}
    ]
    const radioOptions=[
        {key:'Option 1',value:'rOption1'},
        {key:'Option 2',value:'rOption2'},
        {key:'Option 3',value:'rOption3'},
    ]
    const checkboxOptions=[
        {key:'Option 1',value:'cOption1'},
        {key:'Option 2',value:'cOption2'},
        {key:'Option 3',value:'cOption3'},
    ]
    
    const initialValues = {
        email: '',
        description:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        birthDate:null
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('required'),
        description: Yup.string().required('required'),
        selectOption: Yup.string().required('required'),
        radioOption: Yup.string().required('required'),
        checkboxOption:Yup.array().required('required'),
        birthDate:Yup.date().required('required').nullable()
    })
    const onSubmit = (values) => { console.log(values) ;console.log(JSON.parse(JSON.stringify(values))) }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return (
                            <div className='App'>
                                <Form>
                                    <FormikControl control='input' type='email' label='email' name='email' />
                                    <FormikControl control='textarea' label='Description' name='description'/>
                                    <FormikControl control='select' label='Select the topic' name='selectOption' options={dropdownOptions}/>
                                    <FormikControl control='radio' label="radio topic" name='radioOption' options={radioOptions}/>
                                    <FormikControl control='checkbox' label='checkbox topics' name='checkboxOption' options={checkboxOptions}/>
                                    <FormikControl control='date' label="pick a date" name='birthDate' />
                                    <button type='submit'>Submit</button>
                                </Form>
                            </div>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default FormikContainer

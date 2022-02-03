import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const EnrollmentForm = () => {

    const checboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'JAVASCRIPT', value: 'javascript' }
    ]
    const dropdownOption = [
        { key: 'select your course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Angular', value: 'angular' },
        { key: 'Vue', value: 'vue' }
    ]
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    }
    const validateSchema = Yup.object({
        email: Yup.string().email('Invalid Email Address').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        courseDate: Yup.date().required('required').nullable()
    })
    const onSubmit = (values, props) => {
        console.log(props);
        props.resetForm()
    }
    return (
        <div className='form-control'>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    return <Form>
                        <FormikControl
                            control='input'
                            name='email'
                            label='Email'
                            type='email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Bio'
                            name='bio'
                        />
                        <FormikControl
                            control='select'
                            label='Select course'
                            name='course'
                            options={dropdownOption}
                        />
                        <FormikControl
                            control='checkbox'
                            label='Select your skills'
                            name='skills'
                            options={checboxOptions}
                        />
                        <FormikControl
                            control='date'
                            placeholder='Enter a specific time for the component'
                            label='Select course buy date'
                            name='courseDate'
                        />
                        <button>Submit</button>
                    </Form>
                }}
            </Formik>
        </div>
    )
}

export default EnrollmentForm

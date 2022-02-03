import { Form, Formik } from 'formik'
import FormikControl from './FormikControl'
import React from 'react'
import * as Yup from 'yup'

const RegistrationFOrm = () => {
    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('required'),
        password: Yup.string().required('required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('required'),
        modeOfContact: Yup.string().required('required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('required')
        })
    })
    const onSubmit = (values) => {
        console.log(values);
    }
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
                            <Form>
                                <FormikControl 
                                    control='input'
                                    type='email'
                                    label="Email"
                                    name='email'
                                />
                                <FormikControl 
                                    control='input'
                                    type='password'
                                    label="Password"
                                    name='password'
                                />
                                <FormikControl 
                                    control='input'
                                    type='password'
                                    label="Confirm password"
                                    name='confirmPassword'
                                />
                                <FormikControl
                                control='radio'
                                label='Mode of contact'
                                name='modeOfContact'
                                options={options} 
                                />
                                <FormikControl
                                control='input'
                                label='Phone number'
                                name='phone'
                                type='text'
                                />
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>

        </div>
    )
}

export default RegistrationFOrm

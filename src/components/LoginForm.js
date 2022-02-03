import { Formik,Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
    const initialValues={
        email:'',
        password:''
    }

    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid Email').required('REQUIRED'),
        password:Yup.string().required('REQUIRED')
    })

    const onSubmit=(values)=>{
        console.log(values);
    }
    return (
        <div className='form-control'>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {
                    formik=>{
                        return (
                            <Form>
                                <FormikControl control='input' type='email' name='email' label='email'/>
                                <FormikControl control='input' name='password' type='password' label='Password' />
                                <button type='submit' disabled={!formik.isValid}>Login</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginForm

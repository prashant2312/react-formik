import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import React from 'react'

const Textarea = (props) => {
    const {label,name,...rest}=props
    return (
        <div>
            <div className="form-control">
                <label htmlFor={name}>{label}</label>
                <Field as='textarea' id={name} name={name} {...rest}></Field>
                <ErrorMessage name={name} component={TextError}/>
            </div>            
        </div>
    )
}

export default Textarea

import React from 'react'
import { Field,ErrorMessage } from 'formik'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';

const Datepickers = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    (datePickerProps) => {
                        const {field,form}=datePickerProps
                        const { setFieldValue } = form
                        const { value } = field
                        return <DatePicker id={name} {...field} {...rest} selected={value} onChange={(val) => { setFieldValue(name, val) }} />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Datepickers

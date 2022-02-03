import Checkbox from "./Checkbox"
import Datepickers from "./Datepickers"
import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import Textarea from "./Textarea"

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        case 'radio': return <Radio {...rest} />
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date':return <Datepickers {...rest}/>
        default: return null
    }
}

export default FormikControl
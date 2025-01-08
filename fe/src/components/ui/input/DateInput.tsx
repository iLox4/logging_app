import InputWrapper from './InputWrapper'
import { InputProps } from './Types'

type DateInputProps = InputProps<HTMLInputElement> & {maxDate: string, minDate: string,}

const DateInput = ({ maxDate, minDate, label, id, value, handleChange, name, width }: DateInputProps) => {
    return (
        <InputWrapper width={width} inputId={id} inputLabel={label}>
            <input type='date' id={id} name={name ?? id} min={minDate} max={maxDate} value={value} onChange={handleChange}/>
        </InputWrapper>
    )
}

export default DateInput
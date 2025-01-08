import InputWrapper from './InputWrapper'
import { InputProps } from './Types'

type SelectInputProps = InputProps<HTMLSelectElement> & { optionsData: Array<string | number> }

const SelectInput = ({ optionsData, value, handleChange, id, label, width, name }: SelectInputProps) => {
    const options = optionsData.map(option => <option key={option} value={option}>{option}</option>)

    return (
        <InputWrapper width={width} inputId={id} inputLabel={label}>
            <select id={id} value={value} name={name ?? id} onChange={handleChange}>
                {options}
            </select>
        </InputWrapper>
    )
}

export default SelectInput
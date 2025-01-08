import DateInput from '../../ui/input/DateInput'
import SelectInput from '../../ui/input/SelectInput'
import './InputForm.css'
import { useState } from 'react'

const MIN_DATE = '2023-12-31'
const MAX_DATE = new Date().toISOString().split('T')[0]

const dateDefault = {
    startDate: MIN_DATE,
    endDate: MAX_DATE
}

const actionDummy = [
    '',
    'frst',
    'secnd',
    'gen CBD',
    'etc'
]

const InputForm = () => {
    const [date, setDate] = useState(dateDefault)
    const [action, setAction] = useState('')

    const handleSetDate = (event: React.ChangeEvent<HTMLInputElement>, isStartDate: boolean) => {
        setDate(prevDate => {
            const newDate = { ...prevDate }
            if (isStartDate) {
                newDate.startDate = event.target.value
                newDate.endDate = newDate.startDate > newDate.endDate ? newDate.startDate : newDate.endDate    
            } else {
                newDate.endDate = event.target.value
                newDate.startDate = newDate.endDate < newDate.startDate ? newDate.endDate : newDate.startDate
            }
            return newDate
        })
    }

    return (
        <form className='inputForm'>
            <DateInput minDate={MIN_DATE} maxDate={MAX_DATE} id='startDate' value={date.startDate} handleChange={(event) => {handleSetDate(event, true)}} label='Start Date:'/>
            <DateInput minDate={MIN_DATE} maxDate={MAX_DATE} id='endDate' value={date.endDate} handleChange={(event) => {handleSetDate(event, false)}} label='End Date:'/>
            <SelectInput optionsData={actionDummy} id='actionSelect' value={action} handleChange={(event) => { setAction(event.target.value) }} label='Action:'/>
        </form>
    )
}

export default InputForm
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './LogSelectionForm.css'

const MIN_DATE = '2023-12-31'
const MAX_DATE = new Date().toISOString().split('T')[0]

const dateDefault = {
    startDate: dayjs(MIN_DATE),
    endDate: dayjs(MAX_DATE)
}

const actionDummy = [
    'frst',
    'secnd',
    'gen CBD',
    'etc'
]

const usersDummy = [
    'test1',
    'test2',
    'test3'
]

const LogSelectionForm = () => {
    const [date, setDate] = useState(dateDefault)
    const [action, setAction] = useState('')
    const [user, setUser] = useState('')

    const handleSetDate = (value: Dayjs | null, isStartDate: boolean) => {
        if (value === null) return
        setDate(prevDate => {
            const newDate = { ...prevDate }
            if (isStartDate) {
                newDate.startDate = value
                newDate.endDate = newDate.startDate > newDate.endDate ? newDate.startDate : newDate.endDate    
            } else {
                newDate.endDate = value
                newDate.startDate = newDate.endDate < newDate.startDate ? newDate.endDate : newDate.startDate
            }
            return newDate
        })
    }

    return (
        <form className='logSelectionForm'>
            <DatePicker label='Start date' value={date.startDate} maxDate={dayjs(MAX_DATE)} minDate={dayjs(MIN_DATE)} onChange={(newDate) => handleSetDate(newDate, true)} />
            <DatePicker label='End date' value={date.endDate} maxDate={dayjs(MAX_DATE)} minDate={dayjs(MIN_DATE)} onChange={(newDate) => handleSetDate(newDate, false)} />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor='select-action-input' id='select-action-input-label'>Action</InputLabel>
                <Select id='select-action-input' labelId='select-action-input-label' label='Action' value={action} onChange={(event) => setAction(event.target.value)}>
                    {actionDummy.map(actionItem => <MenuItem value={actionItem} key={actionItem}>{actionItem}</MenuItem>)}
                </Select>       
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor='select-user-input' id='select-user-input-label'>User</InputLabel>
                <Select id='select-user-input' labelId='select-user-input-label' label='User' value={user} onChange={(event) => setUser(event.target.value)}>
                    {usersDummy.map(userItem => <MenuItem value={userItem} key={userItem}>{userItem}</MenuItem>)}
                </Select>       
            </FormControl>
        </form>
    )
}

export default LogSelectionForm
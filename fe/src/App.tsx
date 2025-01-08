import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LogsList from "./components/logsList/LogsList"

function App() {

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LogsList />
      </LocalizationProvider>
    )
}

export default App

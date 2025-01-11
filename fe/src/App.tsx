import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LogsList from "./components/logsList/LogsList"
import Grid from '@mui/material/Grid2'
import { Box, Paper } from '@mui/material'

function App() {

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={4}>
          <Grid size={8}>
            <Paper elevation={2} sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <h1>Log list</h1>
              <LogsList />
            </Paper>
          </Grid>
          <Grid size={4}>
            <Paper elevation={2} sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <h1>Log stats</h1>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Box sx={{
                    border: 1,
                    borderColor: '#E0E0E0',
                    borderRadius: 1,
                    height: '7rem',
                    padding: '10px'
                  }}>
                    <h3>Success percentage:</h3>
                    <span style={{ fontSize: 'x-large' }}>75%</span>
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Box sx={{
                    border: 1,
                    borderColor: '#E0E0E0',
                    borderRadius: 1,
                    height: '7rem',
                    padding: '10px'
                  }}>
                    <h3>Number of users:</h3>
                    <span style={{ fontSize: 'x-large' }}>10</span>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </LocalizationProvider>
    )
}

export default App

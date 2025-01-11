// import InputForm from './inputForm/InputForm'
// import Table from '../ui/table/Table'
import LogSelectionForm from './LogSelectionForm'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';

const LogsList = () => {
    // const colsHeaders = ["main", "secondary", "boo"]
    // const tableData = [{ mainVal: 22, secVal: 43, other: { boo: 24 }, id: 1}, { mainVal: 34, secVal: 55, other: { boo: 24 }, id: 2 }, {mainVal: 24, secVal: 45, other: { boo: 24 }, id: 3}]
    // const dataOrder = ['mainVal', 'secVal', { mainKey: 'other', secondaryKey: 'boo'}]

    const columns: GridColDef[] = [
        {
            field: 'id', headerName: 'ID', width: 70
        },
        {
            field: 'user_id', headerName: 'user', width: 130
        },
        {
            field: 'action', headerName: 'action', width: 130
        },
        {
            field: 'timestamp', headerName: 'timestamp', width: 160
        },
        {
            field: 'success', headerName: 'was successful', width: 90
        },
        {
            field: 'fileName', headerName: 'file name', width: 130
        },
    ]

    const rows = [
        { id: '1', user_id: 'test@test1.com', action: 'generate CSV', timestamp: '2025-01-12', fileName: 'testFile.zip', success: true },
        { id: '2', user_id: 'test2@test2.com', action: 'generate WB', timestamp: '2025-01-10', fileName: 'test2File.zip', success: true},
        { id: '3', user_id: 'test@test3.com', action: 'generate CSV', timestamp: '2025-01-07', fileName: 'test3File.zip', success: false},
        { id: '4', user_id: 'test@test1.com', action: 'generate WB', timestamp: '2025-01-08', fileName: 'test2File.zip', success: false},
        { id: '5', user_id: 'test@test1.com', action: 'generate CSV', timestamp: '2025-01-10', fileName: 'testFile.zip', success: true},
    ]

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <LogSelectionForm/>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
            />
        </>
    )
}

export default LogsList
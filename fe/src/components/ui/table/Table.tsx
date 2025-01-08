import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { TableProps } from './Types'
import './Table.css'

const Table = ({ tableData, colsHeaders, dataOrder }: TableProps) => {
    return (
        <table
            className='table'
        >
            <TableHeader colsHeaders={colsHeaders}/>
            <TableRows tableData={tableData} dataOrder={dataOrder} />
        </table>
    )
}

export default Table
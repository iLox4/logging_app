import { TableHeaderProps } from "./Types"

const TableHeader = ({ colsHeaders }: TableHeaderProps) => {
    const tableHeaderCells = colsHeaders.map(colHeader => {
        return <th key={colHeader} scope='col'>{colHeader}</th>
    })

    return (
        <thead>
            <tr>
                { tableHeaderCells }
            </tr>
        </thead>
    )
}

export default TableHeader
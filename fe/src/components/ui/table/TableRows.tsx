import { TableRowsProps, isRowValNorm, isRowValObj } from './Types'

const TableRows = ({ tableData, dataOrder }: TableRowsProps) => {
    return (
        <tbody>
            {tableData.map(rowData => {
                const rowCells = dataOrder.map((dataKey, idx) => {
                    let dataToAdd;
                    let cellId: string | number = idx
                    if (typeof dataKey === 'object') {
                        const dataObj = rowData[dataKey.mainKey]
                        if (isRowValObj(dataObj)) {
                            dataToAdd = dataObj[dataKey.secondaryKey as keyof typeof dataObj]
                            cellId = dataKey.secondaryKey
                        }
                    } else if (isRowValNorm(rowData[dataKey])) {
                        dataToAdd = rowData[dataKey]
                        cellId = dataKey
                    }

                    return (
                        <td key={`cell-${rowData.id}-${cellId}`}>
                            {dataToAdd}
                        </td>
                    )
                })

            return (
                <tr key={`row-${rowData.id}`}>
                    {rowCells}
                </tr>
            )})}
        </tbody>
    )
}

export default TableRows
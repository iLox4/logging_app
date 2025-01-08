/**HELPER TYPES:START */
type TableDataOrder = Array<string | { mainKey: string, secondaryKey: string }>

type RowObjVal = Record<string, string | number | boolean>
type RowNormVal = string | number | boolean | null
type RowVal =  RowObjVal | RowNormVal
type TableData = Array<{
    id: string | number
    [key: string]: RowVal
}>
/**HELPER TYPES:END */

/**COMPONENTS PROPS:START */
export type TableProps = {
    tableData: TableData,
    colsHeaders: string[],
    dataOrder: TableDataOrder,
    isHeaderSticky?: boolean
}

export type TableHeaderProps = {
    colsHeaders: string[],
    isHeaderSticky?: boolean
}

export type TableRowsProps = {
    tableData: TableData,
    dataOrder: TableDataOrder,
}
/**COMPONENTS PROPS:END */

/**FUNCTIONS:START */
export const isRowValObj = (rowVal: RowVal): rowVal is RowObjVal => {
    return typeof rowVal === 'object'
}

export const isRowValNorm = (rowVal: RowVal): rowVal is RowNormVal => {
    return typeof rowVal !== 'object'
}
/**FUNCTIONS:END */
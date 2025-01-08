import Table from './components/ui/table/Table'

function App() {
    const colsHeaders = ["main", "secondary", "boo"]
    const tableData = [{ mainVal: 22, secVal: 43, other: { boo: 24 }, id: 1}, { mainVal: 34, secVal: 55, other: { boo: 24 }, id: 2 }, {mainVal: 24, secVal: 45, other: { boo: 24 }, id: 3}]
    const dataOrder = ['mainVal', 'secVal', { mainKey: 'other', secondaryKey: 'boo'}]

    return (
      <Table colsHeaders={colsHeaders} tableData={tableData} dataOrder={dataOrder} />
    )
}

export default App

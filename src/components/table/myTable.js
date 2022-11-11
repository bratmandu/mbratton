import React, {
  useState, useEffect
} from 'react'
import { v4 as uuid } from 'uuid'
import './table.scss'
import { AgGridReact } from 'ag-grid-react'
import colDefs from './myTableColDefs'

function MyTable() {
  const [mainData, setMainData] = useState([])
  const [gridApi, setGridApi] = useState()

  const siteCode = '50317826-553d-46d8-8b2c-3b7ce5211780'
  const myUrl = `https://run.mocky.io/v3/${siteCode}`

  useEffect(() => {
    if (mainData.length === 0) {
      fetch(myUrl)
        .then((response) => response.json())
        .then((data) => {
          setMainData(data)
        })
    }
  })

  const onGridReady = (params) => {
    setGridApi(params.api)
    params.api.sizeColumnsToFit()
  }

  const getRowData = () => {
    const rowData = []
    const rowDataSorted = []
    gridApi.forEachNode((node) => rowData.push(node.data))
    gridApi.forEachNodeAfterFilterAndSort((node) => rowDataSorted.push(node.data))
    console.log('current table data: ', rowData)
    console.log('current table data sorted: ', rowDataSorted)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          getRowData()
        }}
      >
        Log current Table Data
      </button>
      <br />
      <br />
      <div className="ag-theme-balham-dark">
        <AgGridReact
          onGridReady={onGridReady}
          rowData={mainData}
          columnDefs={colDefs}
          defaultColDef={{
            sortable: true,
            filter: 'agTextColumnFilter',
            resizable: true,
            floatingFilter: true
          }}
          animateRows
          rowHeight={30}
        />
      </div>
    </>
  )
}

export default MyTable

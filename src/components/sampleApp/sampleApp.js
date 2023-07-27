import React, { useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Toast } from 'bootstrap'
import columnDefs from './colDefs'
import CustomToast from '../../utils/toasts'
import { useFetch, postHeader } from '../../utils/fetching'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.min.css'

function SampleApp() {
  const url = 'https://run.mocky.io/v3/91bc6a83-4144-4870-997c-709380196660'
  const badUrl = 'https://run.mocky.io/v3/91bcf6a83-4144-4870-997c-709380196660'
  const {
    response: results,
    loading: isLoading,
    callFetch: getData,
    error: dataError
  } = useFetch()

  const setToast = (condition) => {
    const toastEl = document.getElementById(condition)
    const myToast = new Toast(toastEl)
    myToast.show()
  }

  const hideToast = (condition) => {
    const toastEl = document.getElementById(condition)
    const myToast = new Toast(toastEl)
    myToast.hide()
  }

  useEffect(() => {
    if (!isLoading && dataError) {
      hideToast('successToast')
      setToast('failToast')
    }
  }, [dataError, isLoading])

  useEffect(() => {
    if (!isLoading && results) {
      hideToast('failToast')
      setToast('successToast')
    }
  }, [results, isLoading])

  console.log('results: ', results)

  return (
    <div className="container">
      <CustomToast
        id="successToast"
        className="bg-success"
        header="Success"
        text="Data Fetched!"
      />
      <CustomToast
        id="failToast"
        className="bg-danger"
        header="Error"
        text="Error fetching data."
      />
      <div className="row justify-content-center">
        <div className="col col-12">
          <h1>Sample Application</h1>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              getData(url, postHeader())
            }}
          >
            Get data
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              getData(badUrl, postHeader())
            }}
          >
            Get data - bad url
          </button>
          {isLoading && (
            <p>
              Loading...
            </p>
          )}
          {dataError && (
            <p>
              There was a problem loading the data.
            </p>
          )}
          {results && !isLoading && (
            <div className="ag-theme-alpine table-container">
              <AgGridReact
                rowData={results}
                columnDefs={columnDefs}
                animateRows
                defaultColDef={{
                  sortable: true,
                  filter: 'agTextColumnfilter',
                  resizable: true
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SampleApp

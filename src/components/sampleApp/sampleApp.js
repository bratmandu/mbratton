import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Toast } from 'bootstrap'
import columnDefs, { isValid } from './colDefs'
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
  const [show, setShow] = useState(false)
  const [gridApi, setGridApi] = useState()

  function gridReady(params) {
    setGridApi(params.api)
  }

  const onGridSizeChanged = (params) => {
    if (params.clientWidth > 992) {
      params.api.sizeColumnsToFit()
    }
  }

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

  const getRowClass = (params) => {
    if (!params.data.isActive) {
      return 'mb-row-disabled'
    }
    return ''
  }

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
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button${show ? '' : ' collapsed'}`}
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  {show ? 'Contract to hide info' : 'Expand to show more info'}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${show ? 'show' : 'hide'}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    In this example, I&#39;m using AgGridReact - a powerful library that lets me
                    take some json data, and create a table complete with filtering, sorting, rearranging,
                    and a host of other options, typical of tables. Whilst I often run through creating a
                    basic html table from scratch when training folks in React, which of course is useful,
                    I will transition this into using AgGridReact, as it can save a lot of time and effort,
                    for example, from not having to write your own sorting algorithms.
                  </p>
                  <p>
                    The enterprise version of AgGridReact even supports advanced features like row grouping,
                    which is very handy for displaying large volumes of data.
                  </p>
                  <p>
                    {`In this example, I have generated some sample JSON data using a combination of helpful
                    websites, `}
                    <a href="https://json-generator.com/">JSON Generator</a>
                    , which allows me to set some rules and generate a large volumes of random data quickly.
                    {'Secondly, '}
                    <a href="https://designer.mocky.io/design">MockyIO</a>
                    , which I can paste this JSON into, and generate a custom API response endpoint to hit so that
                    I can return the JSON data.
                  </p>
                  <p>
                    With these in place, I have a couple of buttons here, one of which hits the mocky url, and
                    one which hits an invalid url, so show what happens when I do a fetch on a bad url.
                  </p>
                  <p>
                    I&#39;ve included bootstrap Toasts, which are in effect like push notifications to indicate
                    if a fetch was successful or erroneous. These will show when the data is retrieved or if there
                    is an error.
                  </p>
                  <p>
                    I have also stored this information inside an accordion so you can contract/expand to better see the
                    table below. This is another feature of bootstrap that I modified slightly for my use here.
                  </p>
                  <h3>Table features</h3>
                  <p>
                    Using Ag Grid, I have made use of some of the features provided, to create this table,
                    which is typical of the kind of applications required in the world of finance.
                    The columns are of course
                    <strong> sortable, filterable, and can be rearranged easily</strong>
                    . The &apos;Override&apos; column is
                    <strong> editable</strong>
                    , with the icon indicating as such. Only number values can be entered here.
                    The &apos;Total&apos; column will add up values from &apos;Value A&apos;
                    and &apos;value B&apos; columns
                    <strong> unless </strong>
                    there is a value in &apos;Override&apos;, in which case it will use this. The JSON has some
                    of the rows with a value of &apos;Is Active = false&apos;. This will cause a
                    <strong> disabled </strong>
                    class to be applied to a row, no pointer events and opacity reduced, the override on
                    these rows is
                    <strong> not </strong>
                    enabled.
                  </p>
                  <p>
                    The &apos;Log Current Table Data&apos; button will take the current table, edits and all,
                    and log them out - in a real world scenario this would be like a submit button to send
                    the edited table data to an endpoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {!results && (
            <p className="mt-3">
              Hit the &apos;Get data&apos; button to grab some JSON and view the results in the table.
            </p>
          )}
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
          <button
            type="button"
            disabled={!results}
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              const items = []
              gridApi.forEachNode((node) => {
                items.push(node.data)
              })
              console.log('current grid: ', items)
            }}
          >
            Log current table data
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
                onGridReady={gridReady}
                columnDefs={columnDefs}
                onGridSizeChanged={onGridSizeChanged}
                animateRows
                defaultColDef={{
                  sortable: true,
                  filter: 'agTextColumnfilter',
                  resizable: true
                }}
                getRowClass={getRowClass}
                onCellEditingStopped={(event) => {
                  // could improve this means of clearing invalid values
                  if (!isValid(event.node.data.valueC)) {
                    event.node.setDataValue('valueC', '')
                  }
                  event.node.setData(event.data)
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

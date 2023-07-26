import React, { useEffect, useState, useRef } from 'react'
import { Toast } from 'bootstrap'
import CustomToast from '../../utils/toasts'
import { useFetch, postHeader } from '../../utils/fetching'
// import callbackA from './images/callbackA.png'

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
    if (dataError) {
      hideToast('successToast')
      setToast('failToast')
    }
  })

  const getGoodData = () => {
    if (!isLoading) {
      getData(url, postHeader())
        .then(
          () => {
            hideToast('failToast')
            setToast('successToast')
          }
        )
    }
  }

  const getBadData = () => {
    if (!isLoading) {
      getData(badUrl, postHeader())
        .then(
          () => {
            setToast('successToast')
          }
        )
    }
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
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              getGoodData()
            }}
          >
            Get data
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              getBadData()
            }}
          >
            Get data - bad url
          </button>
          {isLoading && (
            <p>
              Loading...
            </p>
          )}
          {results && !isLoading && (
            <div>Results will go here in a grid</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SampleApp

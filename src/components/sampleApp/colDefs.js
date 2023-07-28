import React from 'react'

export function isValid(value) {
  if (value === undefined || !value?.length > 0 || Number.isNaN(Number(value))) {
    return false
  }
  return true
}

function isEditable(params) {
  console.log('s edit params: ', params)
  return params.data.isActive
}

const columnDefs = [
  {
    headerName: 'ID',
    field: 'id',
    hide: true,
  },
  {
    headerName: 'Region',
    field: 'region'
  },
  {
    headerName: 'Name',
    field: 'name'
  },
  {
    headerName: 'Item ID',
    field: 'itemId'
  },
  {
    headerName: 'Is Active',
    field: 'isActive'
  },
  {
    headerName: 'Value A',
    field: 'valueA'
  },
  {
    headerName: 'Value B',
    field: 'valueB'
  },
  {
    headerName: 'Override',
    field: 'valueC',
    editable: isEditable,
    cellRenderer(params) {
      return (
        <span className="mb-edit-cell">
          <i className="bi bi-pencil float-end my-3" />
          {(params.value && !isValid(params.value)) ? '' : params.value && parseFloat(params.value).toFixed(2)}
        </span>
      )
    }
  },
  {
    headerName: 'Total',
    field: 'valueTotal',
    cellRenderer({ data }) {
      let totalValue = 0
      if (isValid(data?.valueC)) {
        totalValue = data.valueC
      } else {
        totalValue = data.valueA + data.valueB
      }
      return (
        parseFloat(totalValue).toFixed(2)
      )
    }
  }
]

export default columnDefs

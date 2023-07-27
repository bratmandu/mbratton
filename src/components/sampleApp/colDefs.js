import React from 'react'

const columnDefs = [
  {
    headerName: 'ID',
    field: 'id',
    hide: true
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
    editable: true,
    cellDataType: 'number',
    cellRenderer(params) {
      return (
        <span>
          <i className="bi bi-pencil" />
          {params.value}
        </span>
      )
    }
  },
  {
    headerName: 'Total',
    field: 'valueTotal'
  }
]

export default columnDefs

import _colours from '../../utils/_colours.module.scss'

export default [
  {
    field: 'id',
    headerName: 'ID'
  },
  {
    field: 'active',
    headerName: 'Active'
  },
  {
    field: 'firstName',
    headerName: 'First Name'
  },
  {
    field: 'secondName',
    headerName: 'Surname',
    editable: true
  },
  {
    field: 'salary',
    headerName: 'Salary',
    cellStyle(params) {
      const thisColumnField = params.column.colId
      const salaryValue = params.data[thisColumnField]
      if (salaryValue > 20000) {
        return { color: _colours.statusPositive }
      }
      return { color: _colours.statusNegative }
    },
    cellRenderer: (params) => {
      const updatedVal = `£${params.value}`
      return updatedVal
    }
  }
]

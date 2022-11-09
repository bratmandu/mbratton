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
    headerName: 'Surname'
  },
  {
    field: 'salary',
    headerName: 'Salary',
    cellStyle(params) {
      console.log('style params: ', params)
      const thisColumnField = params.column.colId
      const salaryValue = params.data[thisColumnField]
      if (salaryValue > 20000) {
        return { color: _colours.statusPositive }
      }
      return { color: _colours.statusNegative }
    },
    cellRenderer: (params) => {
      console.log('renderer params.value: ', params.value)
      const updatedVal = `£${params.value}`
      return updatedVal
    }
  }
]

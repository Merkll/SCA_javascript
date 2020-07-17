import axios from 'axios';
import fs from 'fs';

const route = 'http://dummy.restapiexample.com/api/v1'

const getEmployeesAvgAge = (employees) => {
  const totalAges = employees.reduce((acc, employee) => acc + Number(employee.employee_age), 0)

  return totalAges / employees.length;
}

const getEmployees = async () => {
  const response = await axios.get(`${route}/employees`)

  fs.writeFileSync('./src/data/employees.json', JSON.stringify(response.data, null, '\t'), {
    flag: 'w+'
  })

  return response.data
}


const getAvg = async () => {
  const employees = await getEmployees()

  const avgAge = getEmployeesAvgAge(employees.data)

  console.log(avgAge)
}

const createEmployee = async () => {
  const response = await axios.post(`${route}/create`, {"name":"Blossom","salary":"300","age":"23"})
  console.log(response.data)
}

getAvg()
createEmployee()

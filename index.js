const express = require('express')
const app = express()
const PORT = 3000

const getData = require('./util/getData')

app.get('/', (req, res) => {
  console.log('GET /')
  const data = getData.getAll()
  res.json({
    name: 'All data in mock-data.json',
    data,
  })
})

app.get('/help', (req, res) => {
  console.log('GET /help')
  const help = getData.getHelp()
  res.json(help)
})

app.get('/count', (req, res) => {
  console.log('GET /count')
  const count = getData.countAll()
  res.json({
    name: 'Data Count for all data in mock-data.json',
    count,
  })
})

app.get('/names', (req, res) => {
  console.log('GET /names')
  const names = getData.getNames()
  res.json({
    name: 'All full names in mock-data.json',
    names,
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

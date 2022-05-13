const express = require('express')
const app = express()
const helmet = require('helmet')

const HOSTNAME = 'localhost'
const PORT = 3000

const getData = require('./util/getData')

app.use(helmet())

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
  res.writeHead(200)
  res.json(help)
})

app.get('/count', (req, res) => {
  console.log('GET /count')
  const count = getData.countAll()
  res.json({
    name: 'Data Count for all data in mock-data.json',
    data: count,
  })
})

app.get('/names', (req, res) => {
  console.log('GET /names')
  const names = getData.getNames()
  res.json({
    name: 'All full names in mock-data.json',
    data: names,
  })
})

app.get('/names/:id', (req, res) => {
  const id = req.params.id
  console.log(`GET /names/${id}`)
  const name = getData.getNameById(id)
  res.json({
    name: `Name for ID: ${id}`,
    data: name,
  })
})

app.listen(PORT, HOSTNAME, () => {
  console.log(`Example app listening on port ${PORT}`)
})

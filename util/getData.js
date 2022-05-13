const data = require('../mock-data.json')

const getHelp = () => {
  return {
    root: {
      endpoint: '/',
      availableMethods: ['GET'],
      description: "All data"
    },
    count: {
      endpoint: '/count',
      availableMethods: ['GET'],
      description: "Count all the data"
    },
    names: {
      endpoint: '/names',
      availableMethods: ['GET'],
      description: "Get all full names in the data"
    },
  }
}

const getNames = () => {
  const nameArray = []
  data.forEach((entry) =>
    nameArray.push(`${entry.first_name} ${entry.last_name}`)
  )
  return nameArray
}

module.exports = {
  getHelp,
  getAll: () => data,
  countAll: () => data.length,
  getNames,
}

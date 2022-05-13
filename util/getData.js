const data = require('../data/mock-data.json')

const getHelp = () => {
  return {
    root: {
      endpoint: '/',
      availableMethods: ['GET'],
      description: 'All data',
    },
    postNew: {
      endpoint: '/new',
      availableMethods: ['POST'],
      description: 'Post a new entry to mock data',
    },
    count: {
      endpoint: '/count',
      availableMethods: ['GET'],
      description: 'Count all the data',
    },
    names: {
      endpoint: '/names',
      availableMethods: ['GET'],
      description: 'Get all full names in the data',
    },
    nameById: {
      endpoint: '/names/:id',
      availableMethods: ['GET'],
      description: 'Get all full names in the data',
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

const getNameById = (id) => {
  const entry = data.find((el) => el.id === +id)
  if (entry) {
    return `${entry.first_name} ${entry.last_name}`
  } else {
    return 'ID does not exist in data'
  }
}

module.exports = {
  getHelp,
  getAll: () => data,
  countAll: () => data.length,
  getNames,
  getNameById,
}

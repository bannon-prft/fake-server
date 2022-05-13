const fs = require('fs')
const path = require('path')

// const data = require('../data/mock-data.json')
const filepath = path.join(__dirname, '../data/mock-data.json')

const postNewEntry = (entry) => {
  try {
    const data = fs.readFileSync(filepath, 'utf8')
    const json = JSON.parse(data)
    
    const newId = json[json.length - 1].id + 1
    const dataToPost = {
      id: newId,
      ...entry
    }
    json.push(dataToPost)

    const dataToWrite = JSON.stringify(json, null, 2)
    fs.writeFileSync(filepath, dataToWrite, (err) => {
      if (err) throw err
      console.log('Data successfully posted as new entry')
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  postNewEntry,
}

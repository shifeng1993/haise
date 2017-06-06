function listTable(tplList) {
  const list = Object.keys(tplList)
  console.log(list.toString().replace(new RegExp(',', 'gm'), '    '))
}

let tplList = require(`${__dirname}/../templates`)

module.exports = listTable(tplList)
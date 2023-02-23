const fs = require('fs-extra')
const path = require('path')
const dist = path.join(__dirname, 'dist')

const indexJs = path.join(dist, 'index.js')
if (fs.existsSync(indexJs)) {
  fs.removeSync(indexJs)
}

fs.readdirSync(dist).forEach((item) => {
  const childPath = path.join(dist, item)
  const stat = fs.statSync(childPath)

  if (stat.isDirectory()) {
    const indexJs = path.join(childPath, 'index.js')
    if (fs.existsSync(indexJs)) {
      fs.removeSync(indexJs)
    }
  }
})

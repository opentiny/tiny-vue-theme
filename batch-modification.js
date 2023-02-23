const fs = require('fs-extra')
const path = require('path')
const srcPath = path.join(__dirname, 'src')

// 批量修改less函数变量名称，修复因为函数名称相同导致打包后的总体样式index.css文件过大问题

fs.readdirSync(srcPath).forEach((dir) => {
  const childPath = path.join(srcPath, dir)
  const stat = fs.statSync(childPath)

  if (stat.isDirectory()) {
    fs.readdirSync(childPath).forEach((item) => {
      const childFile = path.join(childPath, item)
      if (childFile.includes('.less')) {
        const content = fs.readFileSync(childFile).toString('UTF-8')
        const result = content.replace(/component-css-vars/g, `component-css-vars-${dir}`)
        fs.writeFileSync(childFile, result)
      }
    })
  }
})

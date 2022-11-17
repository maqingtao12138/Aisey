/* learnNode.js */
const fs = require('fs')
const _thisName = __filename.slice(__dirname.length + 1)
console.log(_thisName + '开始运行')
fs.readdir(__dirname, (err, files) => {
    if (err) {
        return console.error(err)
    }
    files.forEach((fileName, index) => {
        if (fileName === _thisName) return
        const oldName = __dirname + '\\' + fileName
        const newName = __dirname + '\\' + index + '.png'
        fs.rename(oldName, newName, (e) => {
            if (e) {
                console.log('++++++++++++++++++++++++++++错误++++++++++++++++++++++++++++')
                console.error(e)
                console.log('++++++++++++++++++++++++++++错误++++++++++++++++++++++++++++')
            } else {
                console.log('++++++++++++++++++++++++++++完成了++++++++++++++++++++++++++++')
            }
        })
    })
})

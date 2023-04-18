const fs = require('fs')
const path = require('path')

/** @type {Array<{title: String, content: String, image: String}>} */
const PostMap = [];

const postFiles = fs.readdirSync(path.resolve(__dirname, './posts'))
postFiles.forEach(filename => {
    const fullPath = path.resolve(__dirname, './posts', filename)
    const contents = fs.readFileSync(fullPath).toString().replace(/(\r?\n)+/g, '\n')
    const [title, ...rest] = contents.split("\n")
    PostMap.push({title, content: rest.map(p => `<p>${p}</p>`).join('\n')})
})

module.exports = PostMap
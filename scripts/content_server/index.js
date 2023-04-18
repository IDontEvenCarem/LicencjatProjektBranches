const express = require('express')
const posts = require('./postsDb')

const app = express()
app.use(express.urlencoded({extended: false}))

const port = process.env['KO_LIC_CONTENT_SERVER_PORT'] || 8012

app.get('/api/postStubs', (req, res) => {
    const postsPerPage = req.query['postsPerPage'] || 10
    const page = req.query['page'] || 0
    res.send(posts.map((p, i) => ({idx: i, title: p.title})).slice(postsPerPage*page, postsPerPage*page+postsPerPage))
}) 

app.get('/api/post/:id', (req, res) => {
    const post = posts[parseInt(req.params.id)]
    if (post) {
        res.send(post)
    } else {
        res.status(404)
    }
})

app.listen(port, () => {
    console.log(`Content Server started on port ${port}`)
})
const app = require('express')()
const path = require('path')

const PORT = process.env.PORT?process.env.PORT:'8082'

app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`)
})

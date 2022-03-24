const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
// params
app.get('/:branch', (req, res) => {
  // res.send(`Testing if route functioning or not, here is page '${req.params.branch}'`)
  console.log(req.params.branch)
  res.render(`${req.params.branch}`)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
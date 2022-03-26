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
// routes
// app.get('/:branch', (req, res) => {
//   // res.send(`Testing if route functioning or not, here is page '${req.params.branch}'`)
//   console.log(req.params.branch)
//   res.render(`${req.params.branch}`)
// })
app.get('/Index', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
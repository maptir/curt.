const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const cartRouter = require('./routes/cart')
const productsRouter = require('./routes/products')
const imagesRouter = require('./routes/images')
const ordersRouter = require('./routes/orders')

const DB_PORT = process.env.NODE_ENV === 'test' ? 27018 : 27017
const DB_URL = process.env.MONGODB_HOST || 'mongodb://localhost'

// MongoDB
mongoose.connect(
  `${DB_URL}:${DB_PORT}/curt`,
  { useNewUrlParser: true },
)
const db = mongoose.connection
db.once('open', () => console.log('connected to MongoDB.'))
db.on('error', console.error.bind(console, 'connection error:'))

const app = express()

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Passport Config
require('./config/passport')(passport)
// Passport Middleware
app.use(passport.initialize())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/cart', cartRouter)
app.use('/products', productsRouter)
app.use('/images', imagesRouter)
app.use('/orders', ordersRouter)

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log('a fucking error occurs')
  console.log(err)
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  // res.render('error')
})

module.exports = app

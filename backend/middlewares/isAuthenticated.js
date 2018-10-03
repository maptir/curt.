const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (req, res, next) => {
  jwt.verify(
    req.headers['authorization'] && req.headers['authorization'].split(' ')[1],
    'shhhhh',
    (err, decoded) => {
      console.log('Authenticated', req.headers['authorization'].split(' ')[1])
      if (err) {
        res.send(404)
      } else {
        User.findById(decoded.user.id, (err, user) => {
          console.log(err, user)
          if (err) {
            res.send(401)
          } else {
            req.user = user
            next()
          }
        })
      }
    },
  )
}

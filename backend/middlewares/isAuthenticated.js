const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (req, res, next) => {
  jwt.verify(
    req.headers['authorization'] && req.headers['authorization'].split(' ')[1],
    'shhhhh',
    (err, decoded) => {
      console.log(err)
      if (err) {
        res.send(401)
      } else {
        User.findById(decoded.id, (err, user) => {
          if (err) {
            res.send(401)
          } else if (!user) {
            res.send(404)
          } else {
            req.user = user
            next()
          }
        })
      }
    },
  )
}

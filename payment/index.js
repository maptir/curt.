const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/orders/payment', async (req, res) => {
  console.log(req.body)
  const { data } = await axios.post(
    'https://api.omise.co/charges',
    {
      description: 'Test payment',
      amount: req.body.price + '00' || 99900,
      currency: 'thb',
      card: req.body.token_id
    },
    {
      auth: {
        username: 'skey_test_5e65ne902al2jzbby1m'
      }
    }
  )
  return res.send(data)
})

app.listen(process.env.PORT || 4000)

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar

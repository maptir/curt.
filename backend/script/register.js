const axios = require('axios')

axios
  .post('http://localhost:8000/users/register', {
    firstName: 'Custom',
    lastName: 'RongTao',
    email: 'curt@ku.th',
    facebookId: 'Curt.',
    password: '123456',
    password2: '123456',
  })
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.log(err))
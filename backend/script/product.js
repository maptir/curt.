const axios = require('axios')
const mocks = [
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 7,
  },
  {
    name: 'Cortez Basic SL',
    slug: 'cortez-basic-sl-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/mksnzvsllmy8pej7qm2b/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-cortez-basic-sl-8kwrrB.jpg',
    price: 2000,
    brand: 'Nike',
    size: 9,
  },
  {
    name: 'Air Jordan 1 Mid Alt',
    slug: 'air-jordan-1-mid-alt-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/sgjkztp9xmgx1ur5alfs/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-alt-FKKgKz.jpg',
    price: 2200,
    brand: 'Nike',
    size: 7,
  },
  {
    name: 'Huarache Extreme',
    slug: 'huarache-extreme-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrqddqgfm9og2k4hddrh/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-huarache-extreme-4LNhnF.jpg',
    price: 2900,
    brand: 'Nike',
    size: 7,
  },
]

for (let i = 0; i < mocks.length; i++) {
  axios
    .post('http://localhost:8000/products/add', mocks[i])
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))
}

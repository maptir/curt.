const axios = require('axios')
// const config = require('../config')
// `${config.API_URL}/images/abc.jpg`

const mocks = [
  {
    name: 'Old Skool',
    slug: 'old-skool-men',
    base: null,
    imageUrl: 'https://images.vans.com/is/image/Vans/D3HY28-HERO',
    price: 2300,
    brand: 'Vans',
    size: 6.5,
    thumbnails: [
      'https://images.vans.com/is/image/Vans/D3HY28-HERO',
      'https://images.vans.com/is/image/Vans/D3HY28_E-ALT1',
      'https://images.vans.com/is/image/Vans/D3HY28-ALT7',
      'https://images.vans.com/is/image/Vans/D3HY28-ALT1',
      'https://images.vans.com/is/image/Vans/D3HY28-ALT2',
      'https://images.vans.com/is/image/Vans/D3HY28-ALT3',
      'https://images.vans.com/is/image/Vans/D3HY28-ALT4',
    ],
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 6.5,
  },
  {
    name: 'REDBULL RBR EVO CAT II',
    slug: 'redbull-rbr-evo-cat-ii-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/0/30618801.jpg',
    price: 4499,
    brand: 'Puma',
    size: 10,
  },
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
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 7.5,
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 8.5,
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 10,
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 12,
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
    name: 'Huarache Extreme X',
    slug: 'huarache-extreme-x-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrqddqgfm9og2k4hddrh/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-huarache-extreme-4LNhnF.jpg',
    price: 2900,
    brand: 'Nike',
    size: 7,
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
  {
    name: 'EQT SUPPORT SOCK PRIMEKNIT',
    slug: 'eqt-support-sock-primeknit-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwa5d5b464/zoom/B37529_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 5200,
    brand: 'Adidas',
    size: 7,
  },
  {
    name: 'NMD CS2 PRIMEKNIT',
    slug: 'nmd-cs2-primeknit-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw8bb6ec96/zoom/D96743_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 7000,
    brand: 'Adidas',
    size: 7,
  },
  {
    name: 'X TANGO 18.1',
    slug: 'x-tango-18-1-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwc0f47a27/zoom/DB2281_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 4700,
    brand: 'Adidas',
    size: 7,
  },
  {
    name: 'ULTRABOOST X ALL TERRAIN',
    slug: 'ultraboost-x-all-terrain-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwf6b30512/zoom/BB6519_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 8000,
    brand: 'Adidas',
    size: 7,
  },
  {
    name: 'NMD TS1 PRIMEKNIT GTX',
    slug: 'nmd-ts1-primeknit-gtx',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwd1fea9c6/zoom/AQ0927_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 9000,
    brand: 'Adidas',
    size: 7,
  },
  {
    name: 'NOVAS CT LEATHER',
    slug: 'novas-ct-leather-men',
    base: null,
    imageUrl:
      ' https://www.lacoste.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/5/35spm0038_231_01.jpg',
    price: 3790,
    brand: 'Lacoste',
    size: 10,
  },
  {
    name: 'LEROND TENNIS INSPIRED',
    slug: 'lerond-tennis-inspired-men',
    base: null,
    imageUrl:
      'https://www.lacoste.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/5/35cam0148_092_02.jpg',
    price: 2590,
    brand: 'Lacoste',
    size: 10,
  },
  {
    name: 'EYYLA LEATHER',
    slug: 'eyyla-leather-women',
    base: null,
    imageUrl:
      'https://www.lacoste.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/5/35caw0004_7e9_01.jpg',
    price: 4790,
    brand: 'Lacoste',
    size: 10,
  },
  {
    name: 'CARNABY EVO',
    slug: 'carnaby-evo-women',
    base: null,
    imageUrl:
      'https://www.lacoste.co.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/5/35spj0002_nv1_01.jpg',
    price: 2790,
    brand: 'Lacoste',
    size: 7,
  },
  {
    name: 'IGNITE LIMITLESS 2',
    slug: 'ignite-limitless-2-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/9/19129301-03.jpg',
    price: 4999,
    brand: 'Puma',
    size: 10,
  },
  {
    name: 'SUEDE CLASSIC X THE WEEKND',
    slug: 'suede-classic-x-the-weekend-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/0/30618801.jpg',
    price: 6999,
    brand: 'Puma',
    size: 10,
  },
  {
    name: 'ABYSS DIAMOND',
    slug: 'abyss-diamond-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/6/365655_01-01_1.jpg',
    price: 5499,
    brand: 'Puma',
    size: 10,
  },
  {
    name: 'PUMA XO PARALLEL',
    slug: 'puma-xo-parallel-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/0/10481201.jpg',
    price: 7999,
    brand: 'Puma',
    size: 10,
  },
  {
    name: 'Evan Smith Hi Zero',
    slug: 'evan-smith-hi-zero-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys300423_evansmithhizero,p_nc5_frt2.jpg',
    price: 2460,
    brand: 'DC',
    size: 10,
  },
  {
    name: 'Pure SE',
    slug: 'pure-se-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys400043_purehightopwc,p_xkwb_frt2.jpg',
    price: 2790,
    brand: 'DC',
    size: 10,
  },
  {
    name: 'Kalis Lite',
    slug: 'kalis-lite-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys100291_kalislite,p_wrd_frt2.jpg',
    price: 2460,
    brand: 'DC',
    size: 10,
  },
  {
    name: 'Court Graffik SE',
    slug: 'court-graffik-se-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/300927_courtgraffikse,p_xbwk_frt2.jpg',
    price: 2300,
    brand: 'DC',
    size: 10,
  },
  {
    name: 'Pensford',
    slug: 'pensford-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys400038_pensford,p_wht_frt2.jpg',
    price: 2950,
    brand: 'DC',
    size: 10,
  },
  {
    name: 'ELITE FLEX WASICK',
    slug: 'elite-flex-wasick-men',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/52649_BKW.jpg',
    price: 2300,
    brand: 'Skechers',
    size: 10,
  },
  {
    name: 'BOUNDER WOLFSTON',
    slug: 'bounder-wolfston-men',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/52506_BBK.jpg',
    price: 2130,
    brand: 'Skechers',
    size: 10,
  },
  {
    name: 'SKECHERS ONE CHAMP ULTRA',
    slug: 'skeschers-one-champ-ultra-men',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/18566_WHT.jpg',
    price: 2300,
    brand: 'Skechers',
    size: 10,
  },
  {
    name: 'REEBOK ROYAL BB4500 HI2',
    slug: 'reebok-royal-bb4500-hi2-men',
    base: null,
    imageUrl:
      'https://www.reebok.com/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw7d900817/zoom/CN4107_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 2130,
    brand: 'Reebok',
    size: 10,
  },
  {
    name: 'DMX SERIES 1600',
    slug: 'dmk-series-1600-men',
    base: null,
    imageUrl:
      'https://www.reebok.com/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwa575d7e6/zoom/CN7738_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 3960,
    brand: 'Reebok',
    size: 10,
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

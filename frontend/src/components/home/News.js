import React from 'react'
import styled from 'styled-components'
import NewsProduct from './NewsProduct'
import firstNews from '../../assets/home/new1.jpg'
import secondNews from '../../assets/home/new2.jpg'
import thirdNews from '../../assets/home/new3.jpg'

const Button = styled.button`
  border-radius: 50px !important;
  padding-right: 30px !important;
  padding-left: 30px !important;
  font-size: 10px !important;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
`

const NewsTitle = styled.div`
  margin: 50px;
  font-weight: 900;
  font-size: 36px;
`

class News extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '1000px', margin: 'auto' }} className="container mt-5 mb-5">
        <div className="text-center">
          UNIQUE IS THE NEW COOLS ! <br />
          EXPRESS YOURSELF <br />
          <Button className="btn btn-dark">CREATE YOUR OWN SHOES</Button>
          <NewsTitle>New This Week</NewsTitle>
          <Grid>
            <NewsProduct
              imageUrl={firstNews}
              title="BEAUTIFUL IN YOUR WAY"
              desc="FITS FOR ANY DRESS AND OUTFITS WITH THE NEW VANS"
            />
            <NewsProduct
              imageUrl={secondNews}
              title="NAVY & SOLDIER"
              desc="BE YOURSELF & COOL WITH THE NEW NIKE"
            />
            <NewsProduct
              imageUrl={thirdNews}
              title="BACK TO BASIC"
              desc="EVERYTHING FITS FOR SIMPLE CONVERSE"
            />
          </Grid>
        </div>
      </div>
    )
  }
}

export default News

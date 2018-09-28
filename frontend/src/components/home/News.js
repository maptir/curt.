import React from 'react'
import styled from 'styled-components'
import Product from '../common/Product'
import firstNews from '../../assets/home/new1.jpg'
import secondNews from '../../assets/home/new2.jpg'
import thirdNews from '../../assets/home/new3.jpg'
import text from '../../assets/text/home-text.png'

const Button = styled.button`
  border-radius: 50px !important;
  padding-right: 30px !important;
  padding-left: 30px !important;
  font-size: 14px !important;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2em;
`

const NewsTitle = styled.div`
  margin: 50px;
  font-weight: 900;
  font-size: 36px;
`
const ImageContainer = styled.div`
  max-width: 400px;
  margin: auto;
`

const Margin = styled.div`
  margin: 1em 0;
`

class News extends React.Component {
  render() {
    return (
      <div
        style={{ maxWidth: '1000px', margin: 'auto' }}
        className="container mt-5 mb-5"
      >
        <div className="text-center">
          {/* UNIQUE IS THE NEW COOLS !  */}
          <ImageContainer>
            <img className="img-fluid" src={text} alt="" />
          </ImageContainer>
          <Margin>EXPRESS YOURSELF</Margin>
          <Button className="btn btn-dark">CREATE YOUR OWN SHOES</Button>
          <NewsTitle>New This Week</NewsTitle>
          <Grid>
            <Product
              imageUrl={firstNews}
              title="BEAUTIFUL IN YOUR WAY"
              desc="FITS FOR ANY DRESS AND OUTFITS WITH THE NEW VANS"
              align="center"
            />
            <Product
              imageUrl={secondNews}
              title="NAVY & SOLDIER"
              desc="BE YOURSELF & COOL WITH THE NEW NIKE"
              align="center"
            />
            <Product
              imageUrl={thirdNews}
              title="BACK TO BASIC"
              desc="EVERYTHING FITS FOR SIMPLE CONVERSE"
              align="center"
            />
          </Grid>
        </div>
      </div>
    )
  }
}

export default News

import React from 'react'
import styled from 'styled-components'
import RadioButton from '../common/RadioButton'

const CatalogType = styled.div`
  font-size: 34px;
  font-weight: 300;
`
const SeperateLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #000000;
  margin: 0.5em 0 0.5em 0;
`
const Header = styled.div`
  margin: 0.5em 0 0 0;
  font-size: 20px;
  font-weight: 700;
`
const SubItem = styled.div`
  margin: 0.1em 0 0 0;
  font-size: 14px;
  font-weight: 100;
`

const brandList = ['NIKE', 'ADIDAS', 'Converse', 'Puma']

const typeList = ['Sneaker', 'Formals', 'Sandals', 'Leathers']

const priceList = [
  '< 1,000',
  '1,000 - 3,000',
  '3,000-5,000',
  '5,000-8,000',
  '> 8,000',
]

const colorList = [
  {
    color: '#FFFFFF',
    borderColor: '#000000',
  },
  {
    color: '#9C27B0',
    borderColor: '#9C27B0',
  },
  {
    color: '#3F51B5',
    borderColor: '#3F51B5',
  },
  {
    color: '#03A9F4',
    borderColor: '#03A9F4',
  },
  {
    color: '#009688',
    borderColor: '#009688',
  },
  {
    color: '#8BC34A',
    borderColor: '#8BC34A',
  },
  {
    color: '#FFEB3B',
    borderColor: '#FFEB3B',
  },
  {
    color: '#F44336',
    borderColor: '#F44336',
  },
  {
    color: '#000000',
    borderColor: '#000000',
  },
  {
    color: '#797979',
    borderColor: '#797979',
  },
  {
    color: '#795548',
    borderColor: '#795548',
  },
  {
    color: '#FF9800',
    borderColor: '#FF9800',
  },
  {
    color: '#F8BBD0',
    borderColor: '#F8BBD0',
  },
  {
    color: '#B71C1C',
    borderColor: '#B71C1C',
  },
]

const CircleColor = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  border-radius: 50%;
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0;
  grid-row-gap: 0.5em;
  margin-top: 0.5em
    ${'' /* @media (max-width: 600px) {
    max-width: 100%;
  } */};
`

const Fixed = styled.div`
  position: sticky;
  top: 90px;
  left: 0;
  botoom: 0;
  margin-right: 2em;
`

class Sidebar extends React.Component {
  state = {
    selected: 1,
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <Fixed>
        <CatalogType>MEN</CatalogType>
        <SeperateLine />
        <Header>Brand</Header>
        {brandList.map((item, index) => (
          <SubItem key={index}>{item}</SubItem>
        ))}
        <Header>Type</Header>
        {typeList.map((item, index) => (
          <SubItem key={index}>{item}</SubItem>
        ))}
        <Header>Price</Header>
        {priceList.map((item, index) => (
          <SubItem key={index}>
            <RadioButton
              label={item}
              group="price"
              onClick={() =>
                this.setState({
                  selected: index,
                })
              }
            />
          </SubItem>
        ))}
        <Header>Color</Header>
        <ColorGrid>
          {colorList.map((item, index) => (
            <CircleColor
              key={index}
              color={item.color}
              borderColor={item.borderColor}
            />
          ))}
        </ColorGrid>
      </Fixed>
    )
  }
}

export default Sidebar

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-algin: left;
  padding-left: 2em;
  margin-top: 2em;
`

const Gender = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0.5em 0;
  margin-bottom: 0;
  > a {
    color: white;
  }
`

const Brand = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 0.2em 0;

  > a {
    color: white;
  }
`

const menus = [
  {
    title: { text: 'MEN', to: '/catalog' },
    list: [
      { text: 'NIKE', to: '/catalog?brand=nike' },
      { text: 'ADIDAS', to: '/catalog?brand=adidas' },
      { text: 'CONVERSE', to: '/catalog?brand=converse' },
      { text: 'PUMA', to: '/catalog?brand=puma' },
    ],
  },
  {
    title: { text: 'WOMEN', to: '/catalog' },
    list: [
      { text: 'SKEECHER', to: '/catalog?brand=skeecher' },
      { text: 'CONVERSE', to: '/catalog?brand=converse' },
      { text: 'NIKE', to: '/catalog?brand=nike' },
      { text: 'VANS', to: '/catalog?brand=vans' },
    ],
  },
]

export default () => (
  <Container>
    {menus.map(item => (
      <div key={item.title.text}>
        <Gender>
          <a href={item.title.to}>{item.title.text}</a>
        </Gender>
        {item.list.map(subitem => (
          <Brand key={subitem.text}>
            <a href={subitem.to}>{subitem.text}</a>
          </Brand>
        ))}
      </div>
    ))}
  </Container>
)

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
    title: { text: 'MEN', to: '/men' },
    list: [
      { text: 'NIKE', to: '/men?brand=nike' },
      { text: 'ADIDAS', to: '/men?brand=adidas' },
      { text: 'CONVERSE', to: '/men?brand=converse' },
      { text: 'PUMA', to: '/men?brand=puma' },
    ],
  },
  {
    title: { text: 'WOMEN', to: '/women' },
    list: [
      { text: 'SKEECHER', to: '/women?brand=skeecher' },
      { text: 'CONVERSE', to: '/women?brand=converse' },
      { text: 'NIKE', to: '/women?brand=nike' },
      { text: 'VANS', to: '/women?brand=vans' },
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

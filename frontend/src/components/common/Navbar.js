import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo/logowhite.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background: initial;
  padding: 0 1em;
`

const Logo = styled.img`
  height: 20px;
  margin: 1em;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  & + & {
    margin-left: 1em;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }
`

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Register', path: '/register' },
  { name: 'Login', path: '/login' },
]

class Navbar extends React.PureComponent {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="curt." />
        <Menu>
          {menus.map(menu => (
            <StyledLink key={menu.name} to={menu.path}>
              {menu.name}
            </StyledLink>
          ))}
        </Menu>
      </Container>
    )
  }
}

export default Navbar

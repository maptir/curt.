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
  padding-right: 2em;
  transition: background 300ms, box-shadow 300ms;
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
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  margin: 1.6em 0;
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
  { name: 'HOME', path: '/' },
  { name: 'REGISTER', path: '/register' },
  { name: 'LOGIN', path: '/login' },
]

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.navbar = React.createRef()
  }

  componentDidMount = () => {
    const alterNavbar = () => {
      if (window.scrollY > 40) {
        this.navbar.current.style.background = 'rgba(0, 0, 0, 0.8)'
        this.navbar.current.style.boxShadow = '0 0 4px rgba(0, 0, 0, 0.1)'
      } else {
        this.navbar.current.style.background = 'initial'
        this.navbar.current.style.boxShadow = 'initial'
      }
    }
    window.addEventListener('scroll', alterNavbar)
    alterNavbar()
  }

  render() {
    return (
      <Container innerRef={this.navbar}>
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

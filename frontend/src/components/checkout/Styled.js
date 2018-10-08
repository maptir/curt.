import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
  flex: 1;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5em;
`

export const Bold = styled.div`
  display: inline;
  font-weight: 900;
`

export const Step = styled.div`
  font-weight: 500;
  margin: 1em 0;
`

export const InputBox = styled.div`
  margin-bottom: 1em;
`

export const Input = styled.input`
  border: 2px solid black;
  width: 100%;
  height: 2.2em;
  text-align: left;
`

export const Textarea = styled.textarea`
  border: 2px solid black;
  width: 100%;
  height: 100px;
  text-align: left;
`

export const InputDescription = styled.div`
  font-size: 15px;
  padding: 0.5em 0 0.5em;
  text-align: left;
`

export const FlexBox = styled.div`
  display: flex;
  margin: 1em 0;
  flex-wrap: wrap;
`

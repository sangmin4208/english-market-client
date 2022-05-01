import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``
const Title = styled.h1`
  font-size: 1.5rem;
`
function Header() {
  return (
    <StyledHeader>
      <Title>English Market</Title>
    </StyledHeader>
  )
}

export default Header
import Button from '@components/common/Button'
import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`
const LeftContainer = styled.div`
display:flex;
align-items: center;
gap:1em;
`
const Title = styled.h1`
  font-size: 1.5rem;
`
function Header() {
  return (
    <StyledHeader>
      <Title>English Market</Title>
      <LeftContainer>
        <SearchInput />
        <Button type="primary">로그인</Button>
      </LeftContainer>
    </StyledHeader>
  )
}

export default Header
import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding:0.3em;
    width: 13rem;
    border:1px solid black;
    outline: 0;
    border-radius: 3px;
`

function SearchInput() {
  return (
    <Input placeholder='문장 검색' />
  )
}

export default SearchInput
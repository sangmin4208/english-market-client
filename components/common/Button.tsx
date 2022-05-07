import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  type: "primary" | "secondary",
  children: React.ReactNode
}

const DefaultButton = styled.button`
  padding: 0.3rem 1rem;
  background-color: transparent;
  outline: 0;
  border: 1px solid black;
  border-radius: 0.3rem;
  cursor: pointer;
`
const PrimaryButton = styled(DefaultButton)`
  
`
const SecondaryButton = styled(DefaultButton)`
  
`

function Button({ type, children }: ButtonProps) {
  if (type === "secondary") return <SecondaryButton>{children}</SecondaryButton>
  return (
    <PrimaryButton>{children}</PrimaryButton>
  )
}

export default Button
import styled from 'styled-components'

const StyledFooter = styled.footer`
  
`
const FooterTitle = styled.h2`
  font-size: 22px;
`


function Footer() {
  return (
    <StyledFooter>
      <FooterTitle>
        Made by Nacho | Lendo
      </FooterTitle>
    </StyledFooter>
  )
}

export default Footer
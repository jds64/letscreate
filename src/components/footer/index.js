import styled from 'styled-components'

const FooterWrapper = styled.div`
  padding: 32px 0px;
  display: block;
  margin: auto;
  text-align: center;
  font-family: 'classico-urw', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #888;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <span>© Let's Create 2022</span>
    </FooterWrapper>
  )
}
import styled from 'styled-components'

const Section = styled.section`
  padding: ${({ padding }) => padding || '40px 0'};
  ${({ theme }) => theme.mq.lg} {
    padding: ${({ padding }) => padding || '60px 0'};
  }
  ${({ theme }) => theme.mq.xl} {
    padding: ${({ padding }) => padding || '80px 0'};
  }
`

export default Section

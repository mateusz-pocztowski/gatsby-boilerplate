import styled from 'styled-components'

const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 5px 10px;
  ${({ theme }) => theme.mq.xs} {
    padding: 5px 20px;
  }
  ${({ theme }) => theme.mq.md} {
    padding: 5px 30px;
  }
`

export default Content

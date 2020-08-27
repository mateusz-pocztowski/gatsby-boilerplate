import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from 'theme/GlobalStyle'
import { theme as mainTheme } from 'theme/mainTheme'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MainLayout

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  height: ${({ iconSize, full }) => (full ? '100%' : `${iconSize}px`)};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
`

const IconInner = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: contain;

  transition: filter 200ms ease-in-out, transform 200ms ease-in-out;
  filter: ${({ isWhite }) => (isWhite ? 'brightness(1000)' : 'brightness(1)')};
`

const Icon = ({ full, src, alt, white, size }) => {
  return (
    <IconWrapper iconSize={size} full={full}>
      <IconInner isWhite={white} src={src} alt={alt} />
    </IconWrapper>
  )
}

Icon.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  white: PropTypes.bool,
  full: PropTypes.bool,
}

Icon.defaultProps = {
  size: 24,
  src: '',
  alt: '',
  white: false,
  full: false,
}

export default Icon

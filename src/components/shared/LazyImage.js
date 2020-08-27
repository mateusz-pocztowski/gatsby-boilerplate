import Img from 'gatsby-image/withIEPolyfill'
import styled, { css } from 'styled-components'

const LazyImage = styled(Img).attrs(props => ({
  fluid: props.src,
  objectPosition: props.objectPosition || '50% 50%',
  objectFit: props.cover ? 'cover' : 'contain',
  loading: 'lazy',
}))`
  display: block;
  min-height: ${props => (props.minHeight ? props.minHeight : 'initial')};
  min-width: ${props => (props.minWidth ? `${props.minWidth}px` : 'initial')};
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => (props.height ? `${props.height}px` : '100%')};
  max-height: ${props => (props.maxHeight ? `${props.maxHeight}px` : '100%')};
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  transition: 0.6s ease;
  ${({ slideImage }) =>
    slideImage &&
    css`
      height: 100vh;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.4);
      }
    `}
  ${({ galleryImage }) =>
    galleryImage &&
    css`
      width: 185px;
      height: 183px;
      ${({ theme }) => theme.mq.xs} {
        width: 290px;
        height: 250px;
      }
      ${({ theme }) => theme.mq.s} {
        width: 420px;
        height: 350px;
      }
      ${({ theme }) => theme.mq.md} {
        width: 620px;
        height: 450px;
      }
      ${({ theme }) => theme.mq.lg} {
        width: 820px;
        height: 550px;
      }
      ${({ theme }) => theme.mq.xxl} {
        width: 1080px;
        height: 600px;
      }
    `}
`

export default LazyImage

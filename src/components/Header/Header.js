import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import LazyImage from 'components/shared/LazyImage';
import { HeadingOne } from 'components/shared/Headings';

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  visibility: hidden;
  transition: all 1s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const SlideInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 15%;
  transform: translate(0%, -55%);
  opacity: 0;
  z-index: 3;
  color: #fff;
  padding-left: 30px;
  transition: 0.7s;
  visibility: hidden;
  & > h1 > span {
    font-weight: 100;
    font-size: 7rem;
  }
  & > button {
    margin-top: 20px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translate(-15%, -55%);
      transition-delay: 0.8s;
    `}
`;

const Header = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const slide = useCallback(() => {
    const nextSlide = (activeSlide + 1) % slides.length;
    setActiveSlide(nextSlide);
  }, [activeSlide]);

  const changeToSlide = slideIndex => {
    if (!isAnimating) setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const setSlideTimeout = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(slide, 6000);

      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    };

    slides.length > 1 && setSlideTimeout();

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(setSlideTimeout);
    };
  }, [activeSlide, slide]);

  return (
    <Wrapper>
      <SlideWrapper>
        <SlideInnerWrapper>
          {slides.map(({ src, alt, title }, index) => (
            <Slide key={index}>
              <TitleWrapper isActive={activeSlide === index}>
                <HeadingOne dangerouslySetInnerHTML={{ __html: title }} />
              </TitleWrapper>
              <ImageWrapper isActive={activeSlide === index}>
                <LazyImage src={src} alt={alt || `hero image ${index}`} cover />
              </ImageWrapper>
            </Slide>
          ))}
        </SlideInnerWrapper>
      </SlideWrapper>
    </Wrapper>
  );
};

Header.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;

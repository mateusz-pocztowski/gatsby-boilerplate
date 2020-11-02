import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/shared/SEO';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

const IndexPage = ({ data }) => {
  const heroImg = data.heroImg.childImageSharp.fluid;

  const slides = [
    {
      src: heroImg,
      alt: 'hero image',
      title: 'Slide 1',
    },
    {
      src: heroImg,
      alt: 'hero image',
      title: 'Slide 2',
    },
    {
      src: heroImg,
      alt: 'hero image',
      title: 'Slide 3',
    },
  ];

  return (
    <>
      <SEO title="Strona główna" />
      <Navigation />
      <Header slides={slides} />
      <main>
        <div style={{ height: '100vh' }} />
      </main>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query queryHomePage {
    heroImg: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;

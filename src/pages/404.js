import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/shared/SEO';

const NotFoundPage = ({ data }) => (
  <>
    <SEO title="Not found" />
  </>
);

NotFoundPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query queryNotFoundPage {
    image: file(name: { eq: "favicon" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default NotFoundPage;

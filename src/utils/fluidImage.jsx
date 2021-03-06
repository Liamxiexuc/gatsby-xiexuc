import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const FluidImage = ({ imgName, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName,
      );
      if (!image) {
        return null;
      }

      return <Img fluid={image.node.fluid} alt={alt} className={className} />;
    }}
  />
);

export default FluidImage;

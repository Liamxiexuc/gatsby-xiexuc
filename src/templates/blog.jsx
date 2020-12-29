import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/Seo';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  return (
    <>
      <Seo title="my blog" />
      <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </Layout>
    </>
  );
};

export default Blog;

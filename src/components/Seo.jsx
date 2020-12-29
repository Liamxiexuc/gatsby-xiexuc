import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        author
        description
        url
      }
    }
  }
`;

const Seo = ({
  title,
  author,
  description,
  url,
  keywords,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaUrl = url || data.site.siteMetadata.url;
        const metaKeywords = keywords || [
          'Xiexu Chen blog',
          'Xiexuc blog',
          'gatsby blog',
        ];
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'og:title',
                content: metaTitle,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'og:type',
                content: 'website',
              },
              {
                name: 'profile:username',
                content: metaAuthor,
              },
              {
                name: 'og:url',
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                  name: 'keywords',
                  content: metaKeywords.join(', '),
                }
                : [],
            )}
          />
        );
      }}
    />
  );
};

export default Seo;

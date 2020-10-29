import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/Seo'


export const query = graphql`
    query (
        $slug: String!
    ) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Fragment>
            <Seo  title='my blog'/>
            <Layout>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            </Layout>
        </Fragment>
    )
}

export default Blog
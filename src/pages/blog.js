import React, { Fragment } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Footer from '../components/footer'
import GetInTouch from '../components/getInTouch/GetInTouch'
import  { MARKDAWN_SCHEMA } from '../constants/option'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            type
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const blogs = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === MARKDAWN_SCHEMA.BLOG)

    return (
        <Fragment>
            <Layout>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                >
                    <h1 className={blogStyles.blogTitle}>Blogs</h1>
                    <p>Some of the blogs I've written.</p>
                    <ol className={blogStyles.posts}>
                        {blogs.map(blog => {
                            return (
                                <li className={blogStyles.post} key={blog.node.fields.slug}>
                                    <Link to={blog.node.fields.slug}>
                                        <h2>{blog.node.frontmatter.title}</h2>
                                        <p>{blog.node.frontmatter.date}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ol>
                </motion.div>
                <GetInTouch />
            </Layout>
            <Footer />
        </Fragment>
    )
}

export default BlogPage;
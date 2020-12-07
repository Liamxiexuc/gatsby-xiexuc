import React, { Fragment } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import GetInTouch from '../components/getInTouch/GetInTouch'
import Footer from '../components/footer'
import ProjectGrid from '../components/project/projectGrid'
import  { MARKDAWN_SCHEMA } from '../constants/option'
import Seo from '../components/Seo'
import projectStyles from './project.module.scss'

const ProjectPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        type
                        sort
                        date
                        url
                        brief
                        keywords
                        coverImage {
                            childImageSharp {
                                fluid (maxWidth: 600) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)

    const projects = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === MARKDAWN_SCHEMA.PROJECT)

    return (
        <Fragment>
            <Seo  title='my projects'/>
            <Layout>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                >
                    <h1 className={projectStyles.pageTitle}>Projects</h1>
                    <p>Some of the projects I've worked on.</p>
                    <ProjectGrid projects={projects} />
                </motion.div>
                <GetInTouch />
            </Layout>
            <Footer />
        </Fragment>
    )
}


export default ProjectPage

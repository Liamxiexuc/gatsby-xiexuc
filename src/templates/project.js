import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Footer from "../components/footer"
import Header from "../components/header/header"
import Seo from '../components/Seo'
import Container from '../components/Container'
import projectStyles from "./project.module.scss"

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
                subTitle
                type
                sort
                date
                url
                brief
                content
                description
                keywords
                coverImage {
                    childImageSharp {
                        fluid (maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sliderOne {
                    childImageSharp {
                        fluid (maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sliderTwo {
                    childImageSharp {
                        fluid (maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sliderThree {
                    childImageSharp {
                        fluid (maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            html
        }
    }
`

const Project = (props) => {
    const { title, subTitle, content, description, keywords, url, coverImage, sliderOne, sliderTwo, sliderThree } = props.data.markdownRemark.frontmatter;
    const features = keywords.split(',');

    return (
        <Fragment>
            <Seo  title='my project'/>
            <Header />
            <div className={projectStyles.topLayer}></div>
            <section className={projectStyles.caseStudy}>
                <Container>
                    <Link className={projectStyles.backArrowLink} to='/project'>
                        Project
                    </Link>
                    <h1>{title}</h1>
                </Container>
                <Img alt='project' className={projectStyles.showImg} fluid={coverImage.childImageSharp.fluid}/>
                <Container>
                    <div className={projectStyles.contentHolder}>
                        <aside>
                            <div className={projectStyles.block}>
                                <span>Website</span>
                                <a className={projectStyles.sourceLink} href={url} target='_blank' rel='noreferrer noopener'>Visit Website</a>
                            </div>
                            <div className={projectStyles.block}>
                                <span>Features</span>
                                <ul>
                                    {features.map(feature => {
                                        return (
                                            <li>{feature}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </aside>
                        <div className={projectStyles.content}>
                            <h3>{content}</h3>
                            <h2>{subTitle}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={projectStyles.fullWidthGallery}>
                
            </section>
        </Fragment>
    )
}

export default Project
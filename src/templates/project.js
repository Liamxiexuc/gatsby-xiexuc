import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Header from "../components/header/header"
import Seo from '../components/Seo'
import Carousel from '../components/carousel/Carousel'
import PhoneShowCase from '../components/phoneShowCase/PhoneShowCase'
import Container from '../components/Container'
import Github from '../assets/ICON/Github'
import Instagram from '../assets/ICON/Instagram'
import Linkdin from '../assets/ICON/Linkdin'
import Facebook from '../assets/ICON/Facebook'
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
                frontImage {
                    childImageSharp {
                        fluid (maxWidth: 1580, maxHeight: 755) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                mobileOne {
                    childImageSharp {
                        fluid (maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                mobileTwo {
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
                sliderFour {
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
    const { title, subTitle, content, description, keywords, url, coverImage, frontImage, mobileOne, mobileTwo, sliderOne, sliderTwo, sliderThree, sliderFour } = props.data.markdownRemark.frontmatter;
    let features = [];
    if (keywords) {
        features = keywords.split(',');
    }
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
                <div className={projectStyles.frontImgWrap}>
                    {
                        frontImage ? (
                            <Img alt='project' className={projectStyles.showImg} fluid={frontImage.childImageSharp.fluid}/>
                        ) : (
                            <Img alt='project' className={projectStyles.showImg} fluid={coverImage.childImageSharp.fluid}/>
                        )
                    }
                </div>
                <Container>
                    <div className={projectStyles.contentHolder}>
                        <aside>
                            { mobileOne ? (
                                <div className={projectStyles.block}>
                                    <span>Website</span>
                                    <a className={projectStyles.sourceLink} href={url} target='_blank' rel='noreferrer noopener'>Visit Website</a>
                                </div>
                            ) : (
                                <div className={projectStyles.block}>
                                    <span>Repository</span>
                                    <a className={projectStyles.sourceLink} href={url} target='_blank' rel='noreferrer noopener'>Visit Repo</a>
                                </div>
                            )}
                            <div className={projectStyles.block}>
                                <span>Features</span>
                                <ul>
                                    {features.map(feature => {
                                        return (
                                            <li key={feature}>{feature}</li>
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
            {
                sliderOne ? (
                    <Carousel sliderOne={sliderOne} sliderTwo={sliderTwo} sliderThree={sliderThree} sliderFour={sliderFour} />
                ) : null
            }
            {
                mobileOne ? (
                    <PhoneShowCase mobileOne={mobileOne} mobileTwo={mobileTwo} />
                ) : null
            }
            <Container>
                <div className={projectStyles.getInTouch}>
                    <div className={projectStyles.block}>
                        <h4>Want to build some <br/> Great Works together?</h4>
                        <Link className={projectStyles.requestLink} to='/contact'>
                            Get in touch
                        </Link>
                    </div>
                    <div className={projectStyles.block}>
                        <p>
                            I collaborate with innovative company to create cutting-edge digital experiences. Let's connect.
                        </p>
                    </div>
                </div>
            </Container>
            <footer className={projectStyles.projectFooter}>
                <div className={projectStyles.footerTop}>
                    <div className={projectStyles.infoListing}>
                        <div className={projectStyles.column}>
                            <h3>Xiexu Chen</h3>
                            <p>Copyright © 2020</p>
                        </div>
                        <div className={projectStyles.siteColumn}>
                            <Link to='/home'>Home</Link>
                            <Link to='/project'>Project</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/gallery'>Gallery</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </div>
                    <div className={projectStyles.inTouch}>
                        <p>Creating future-proof digital experiences is what I do. </p>
                        <a className={projectStyles.emailLink} href="mailto:liam.xiexuc@gmail.com">liam.xiexuc@gmail.com</a>
                        <ul className={projectStyles.iconList}>
                            <li>
                                <a href='https://github.com/Liamxiexuc' target='_blank' rel='noreferrer noopener'><Github /></a>
                            </li>
                            <li>
                                <a href='https://github.com/Liamxiexuc' target='_blank' rel='noreferrer noopener'><Instagram /></a>
                            </li>
                            <li>
                                <a href='https://github.com/Liamxiexuc' target='_blank' rel='noreferrer noopener'><Linkdin /></a>
                            </li>
                            <li>
                                <a href='https://github.com/Liamxiexuc' target='_blank' rel='noreferrer noopener'><Facebook /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Project
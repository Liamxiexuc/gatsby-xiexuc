import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Header from "../components/header/header"
import Footer from "../components/footer"
import Seo from '../components/Seo'
import Carousel from '../components/carousel/Carousel'
import PhoneShowCase from '../components/phoneShowCase/PhoneShowCase'
import Container from '../components/Container'
import LeftArrow from '../assets/ICON/LeftArrow'
import RightArrow from '../assets/ICON/RightArrow'
import projectStyles from "./project.module.scss"

export const query = graphql`
    query (
        $slug: String!
    ) {
        project: markdownRemark (
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
                prevTitle
                prevUrl
                nextTitle
                nextUrl
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
    const { title, subTitle, content, description, keywords, prevTitle, prevUrl, nextTitle, nextUrl, url, coverImage, frontImage, mobileOne, mobileTwo, sliderOne, sliderTwo, sliderThree, sliderFour } = props.data.project.frontmatter;
    let features = [];
    if (keywords) {
        features = keywords.split(',');
    }

    const hiddenPrev = !prevTitle  ? projectStyles.hidden : null;
    const hiddenNext = !nextTitle  ? projectStyles.hidden : null;

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
                        ) : null
                    }
                    {
                        !frontImage && coverImage ? (
                            <Img alt='project' className={projectStyles.showImg} fluid={coverImage.childImageSharp.fluid}/>
                        ) : null
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
            <section className={projectStyles.pageSwitch}>
                <div className={projectStyles.pageSwitchContainer}>
                    <Link className={`${projectStyles.prev} ${hiddenPrev}`} to={prevUrl}>
                        <LeftArrow />
                        {prevTitle}
                    </Link>
                    <Link className={`${projectStyles.next} ${hiddenNext}`} to={nextUrl}>
                        <RightArrow />
                        {nextTitle}
                    </Link>
                </div>
            </section>
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
            <Footer />
        </Fragment>
    )
}

export default Project
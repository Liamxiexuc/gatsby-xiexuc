import React from 'react'
import { Link, graphql } from 'gatsby'
import Fire from '../assets/fire.mp4'
import Img from "gatsby-image"
import landingStyles from './index.module.scss'


const IndexPage = ({ data }) => {
  return (
      <section className={landingStyles.showcase}>
        <video src={Fire} autoPlay muted loop></video>
        <Img alt='fire' className={landingStyles.coverImg} style={{position: 'absolute'}} fluid={data.file.childImageSharp.fluid}/>
        <div className={landingStyles.content}>
          <h1>Light On Your Camping Fire</h1>
          <h3>I'm Xiexu Chen, a full-stack developer living in Hobart.</h3>
          <Link to='/home' className={landingStyles.btn} >
            <div className={landingStyles.textWrap}>
              <div className={landingStyles.btnText} data-text='READ MORE'>
                READ MORE
              </div>
            </div>
          </Link>
        </div>
      </section>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "fire.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage;

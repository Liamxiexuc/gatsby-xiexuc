import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fire from '../assets/fire.mp4';
import landingStyles from './index.module.scss';
import Seo from '../components/Seo';

const IndexPage = ({ data }) => {
  return (
    <section className={landingStyles.showcase}>
      <Seo />
      <div className={landingStyles.videoContainer}>
        <video src={Fire} autoPlay muted loop />
      </div>
      <Img
        alt="fire"
        className={landingStyles.coverImg}
        style={{ position: 'absolute' }}
        fluid={data.file.childImageSharp.fluid}
      />
      <div className={landingStyles.content}>
        <h1>Light On Your Camping Fire</h1>
        <h3>I&apos;m Xiexu Chen, a full-stack developer living in Hobart.</h3>
        <Link to="/home" className={landingStyles.btn}>
          <div className={landingStyles.textWrap}>
            <div className={landingStyles.btnText} data-text="READ MORE">
              READ MORE
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "fire.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;

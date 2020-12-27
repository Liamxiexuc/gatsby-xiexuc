import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container';
import phoneStyles from './phone.module.scss';

const PhoneShowCase = ({ mobileOne, mobileTwo }) => {
  return (
    <React.Fragment key="PhoneShowCase">
      <section className={phoneStyles.headingWrap}>
        <Container>
          <h3 className={phoneStyles.title}>Mobile Devices View</h3>
        </Container>
      </section>
      <section className={phoneStyles.phoneWrap}>
        <Container>
          <div className={phoneStyles.phoneListing}>
            <div className={phoneStyles.slide}>
              <Img
                alt="project mobile view"
                className={phoneStyles.mobileImg}
                fluid={mobileOne.childImageSharp.fluid}
              />
            </div>
            <div className={phoneStyles.slide}>
              <Img
                alt="project mobile view"
                className={phoneStyles.mobileImg}
                fluid={mobileTwo.childImageSharp.fluid}
              />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PhoneShowCase;

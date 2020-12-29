import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { trackCustomEvent, OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Seo from '../components/Seo';
import GetInTouchSole from '../components/getInTouch/GetInTouchSole';
import Capabilities from '../components/capabilities/Capabilities';
import FluidImage from '../utils/fluidImage';
import BottomArrow from '../assets/ICON/BottomArrow';
import homeStyles from './home.module.scss';
import Github from '../assets/ICON/Github';
import Instagram from '../assets/ICON/Instagram';
import LinkedIn from '../assets/ICON/LinkedIn';
import Facebook from '../assets/ICON/Facebook';

const HomePage = () => {
  const projectSection = useRef(null);

  const gotoProjectSection = () => {
    // eslint-disable-next-line no-undef
    window.scrollTo({
      top: projectSection.current.offsetTop,
      behavior: 'smooth',
    });
    trackCustomEvent({
      category: 'Scroll Button',
      action: 'Click',
      label: 'Home',
    });
  };

  return (
    <>
      <Seo title="my home page" />
      <Layout>
        <motion.div
          className={homeStyles.introBox}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -30 }}
        >
          <div>
            <p className={homeStyles.pretitle}>HELLO, MY NAME IS XIEXU</p>
            <h1>Xiexu Chen (Liam) - Fullstack developer</h1>
            <h2 className={homeStyles.h1}>I make websites.</h2>
            <p className={homeStyles.text}>
              I&apos;m a full-stack developer living in Hobart.
              <br />
              I create modern and responsive
              {' '}
              <Link to="/project" className={homeStyles.textDecor}>
                Web Applications
              </Link>
              .
            </p>
          </div>
          <div className={homeStyles.logoWrap}>
            <OutboundLink
              href="https://github.com/Liamxiexuc"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/nehc_uxeix"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram />
            </OutboundLink>
            <OutboundLink
              href="https://www.linkedin.com/in/liam-chen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedIn />
            </OutboundLink>
            <OutboundLink
              href="https://www.facebook.com/people/Xiexu-Chen/100011499607808"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook />
            </OutboundLink>
          </div>
          <BottomArrow
            className={homeStyles.arrow}
            onClick={gotoProjectSection}
          />
        </motion.div>
        <section ref={projectSection} className={homeStyles.project}>
          <h2>Experiences I&apos;ve Created</h2>
          <div className={homeStyles.projectWrap}>
            <div className={homeStyles.item}>
              <Link className={homeStyles.itemLink} to="/project/jrdashboard">
                <div className={homeStyles.imgWrap}>
                  <FluidImage imgName="jrdashboard.png" />
                  <div className={homeStyles.itemText}>
                    <p>
                      A learning management system for JR Academy staffs,
                      teachers & students.
                    </p>
                  </div>
                </div>
              </Link>
              <h4>
                <Link to="/project/jrdashboard">JR Dashboard</Link>
              </h4>
            </div>
            <div className={homeStyles.item}>
              <Link className={homeStyles.itemLink} to="/project/jiangren">
                <div className={homeStyles.imgWrap}>
                  <FluidImage imgName="jiangren.png" />
                  <div className={homeStyles.itemText}>
                    <p>
                      JR academy is determined to make job hunting in Australia
                      easier for IT professions.
                    </p>
                  </div>
                </div>
              </Link>
              <h4>
                <Link to="/project/jiangren">JR Official Website</Link>
              </h4>
            </div>
            <div className={homeStyles.item}>
              <Link className={homeStyles.itemLink} to="/project/bookingapp">
                <div className={homeStyles.imgWrap}>
                  <FluidImage imgName="bookingapp.png" />
                  <div className={homeStyles.itemText}>
                    <p>
                      A super easy appointment scheduling System built for AIBT
                      Global.
                    </p>
                  </div>
                </div>
              </Link>
              <h4>
                <Link to="/project/bookingapp">Consultation Booking App</Link>
              </h4>
            </div>
            <div className={homeStyles.item}>
              <Link className={homeStyles.itemLink} to="/project/raffle">
                <div className={homeStyles.imgWrap}>
                  <FluidImage imgName="raffle.png" />
                  <div className={homeStyles.itemText}>
                    <p>A native iOS application build by Swift 5</p>
                  </div>
                </div>
              </Link>
              <h4>
                <Link to="/project/raffle">Lucky Raffle</Link>
              </h4>
            </div>
          </div>
          <Link to="/project" className={homeStyles.button}>
            MORE WORK
          </Link>
        </section>
        <Capabilities />
      </Layout>
      <GetInTouchSole />
      <Footer />
    </>
  );
};

export default HomePage;

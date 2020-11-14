import React, { Fragment, useRef } from "react"
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Seo from '../components/Seo'
import GetInTouch from '../components/getInTouch/GetInTouch'
import FluidImage from '../utils/fluidImage.jsx'
import BottomArrow from '../assets/ICON/BottomArrow'
import homeStyles from './home.module.scss'
import Github from '../assets/ICON/Github'
import Instagram from '../assets/ICON/Instagram'
import Linkdin from '../assets/ICON/Linkdin'
import Facebook from '../assets/ICON/Facebook'

const HomePage = () => {
    const projectSection = useRef(null);

    const gotoProjectSection = () =>
        window.scrollTo({
            top: projectSection.current.offsetTop,
            behavior: 'smooth'
        })

    return (
        <Fragment>
            <Seo  title='my home page'/>
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
                            I'm a full-stack developer living in Hobart.
                            <br />
                            I create modern and responsive <Link to='/project' className={homeStyles.textDecor}>Web Applications</Link>.
                        </p>
                    </div>
                    <div className={homeStyles.logoWrap}>
                        <a href='https://github.com/Liamxiexuc' target='_blank' rel='noreferrer noopener'><Github /></a>
                        <a href='https://www.instagram.com/nehc_uxeix' target='_blank' rel='noreferrer noopener'><Instagram /></a>
                        <a href='https://www.linkedin.com/in/liam-chen' target='_blank' rel='noreferrer noopener'><Linkdin /></a>
                        <a href='https://www.facebook.com/people/Xiexu-Chen/100011499607808' target='_blank' rel='noreferrer noopener'><Facebook /></a>
                    </div>
                    <BottomArrow className={homeStyles.arrow} onClick={gotoProjectSection} />
                </motion.div>
                <section ref={projectSection} className={homeStyles.project}>
                    <h2>Experiences I've Created</h2>
                    <div className={homeStyles.projectWrap}>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/jrdashboard'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='jrdashboard.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>A learning management system for JR Academy staffs, teachers & students.</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/jrdashboard' >JR Dashboard</Link></h4>
                        </div>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/jiangren'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='jiangren.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>JR academy is determined to make job hunting in Australia easier for IT professions.</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/jiangren' >JR Official Website</Link></h4>
                        </div>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/bookingapp'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='bookingapp.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>A super easy appointment scheduling System built for AIBT Global.</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/bookingapp' >Consultation Booking App</Link></h4>
                        </div>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/tweetpaas'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='paas.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>A scalable Cloud based Platform.</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/tweetpaas' >Tweets PaaS</Link></h4>
                        </div>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/raffle'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='raffle.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>A native iOS application build by Swift 5</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/raffle' >Lucky Raffle</Link></h4>
                        </div>
                        <div className={homeStyles.item}>
                            <Link className={homeStyles.itemLink} to='/project/weatherapp'>
                                <div className={homeStyles.imgWrap}>
                                    <FluidImage imgName='weatherapp.png' />
                                    <div className={homeStyles.itemText}>
                                        <p>A weather SPA, which could search differents location and get their weather information.</p>
                                    </div>
                                </div>
                            </Link>
                            <h4><Link to='/project/weatherapp' >Weather App</Link></h4>
                        </div>
                    </div>
                </section>
            </Layout>
            <GetInTouch />
            <Footer />
        </Fragment>
    )
}

export default HomePage;
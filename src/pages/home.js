import React, { Fragment } from "react"
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import homeStyles from './home.module.scss'
import Github from '../assets/ICON/Github'
import Instagram from '../assets/ICON/Instagram'
import Linkdin from '../assets/ICON/Linkdin'
import Facebook from '../assets/ICON/Facebook'

const HomePage = () => {
    return (
        <Fragment>
            <Seo  title='my home page'/>
            <Layout>
                <motion.div
                    className={homeStyles.introBox}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                >
                    <div>
                        <p className={homeStyles.pretitle}>HELLO, MY NAME IS XIEXU</p>
                        <h1>I make websites.</h1>
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
                </motion.div>
            </Layout>
        </Fragment>
    )
}

export default HomePage;
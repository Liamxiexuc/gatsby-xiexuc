import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import homeStyles from './home.module.scss'
import Github from '../assets/ICON/Github'
import Instagram from '../assets/ICON/Instagram'
import Linkdin from '../assets/ICON/Linkdin'
import Facebook from '../assets/ICON/Facebook'

const HomePage = () => {
    return (
        <Layout>
            <section className={homeStyles.introBox}>
                <div>
                    <p className={homeStyles.pretitle}>HELLO, MY NAME IS XIEXU</p>
                    <h1>I make websites.</h1>
                    <p className={homeStyles.text}>
                        I'm a full-stack developer living in Hobart.
                        <br />
                        I create modern and responsive Web Applications.
                    </p>
                </div>
                <div className={homeStyles.logoWrap}>
                    <a href='https://github.com/Liamxiexuc' target='_blank'><Github /></a>
                    <a href='https://www.instagram.com/nehc_uxeix' target='_blank'><Instagram /></a>
                    <a href='https://www.linkedin.com/in/liam-chen' target='_blank'><Linkdin /></a>
                    <a href='https://www.facebook.com/people/Xiexu-Chen/100011499607808' target='_blank'><Facebook /></a>
                </div>

            </section>
        </Layout>
    )
}

export default HomePage;
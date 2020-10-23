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
                        I creating modern and responsive Web Application.
                    </p>
                </div>
                <div className={homeStyles.logoWrap}>
                    <a><Github /></a>
                    <a><Instagram /></a>
                    <a><Linkdin /></a>
                    <a><Facebook /></a>
                </div>

            </section>
        </Layout>
    )
}

export default HomePage;
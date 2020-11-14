import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Github from '../assets/ICON/Github'
import Instagram from '../assets/ICON/Instagram'
import Linkdin from '../assets/ICON/Linkdin'
import Facebook from '../assets/ICON/Facebook'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer>
            <div className={footerStyles.footerTop}>
                <div className={footerStyles.infoListing}>
                    <div className={footerStyles.column}>
                        <h3>{data.site.siteMetadata.author}</h3>
                        <p>Copyright © 2020</p>
                    </div>
                    <div className={footerStyles.siteColumn}>
                        <Link to='/home'>Home</Link>
                        <Link to='/project'>Project</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>
                <div className={footerStyles.inTouch}>
                    <p>Creating future-proof digital experiences is what I do. </p>
                    <a className={footerStyles.emailLink} href="mailto:liam.xiexuc@gmail.com">liam.xiexuc@gmail.com</a>
                    <ul className={footerStyles.iconList}>
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
    )
}

export default Footer
import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Tab from './Tab';
import headerStyles from "./header.module.scss"
import signiture from '../../assets/xiexuc.svg'

const Header = () => {
    const routes = [
        {
            url: '/home',
            name: 'Home',
        },
        {
            url: '/project',
            name: 'Project',
        },
        {
            url: '/blog',
            name: 'Blog',
        },
        {
            url: '/gallery',
            name: 'Gallery',
        },
        {
            url: '/contact',
            name: 'Contact',
        },
    ];

    const [showMenu, setShowMenu] = useState(false);

    const handleClickMenu = () => {
        setShowMenu(!showMenu)
    }

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <header className={scrollTop === 0 ? headerStyles.header : `${headerStyles.header} ${headerStyles.stickHeader}`}>
            <div className={headerStyles.logoContainer}>
                <Link className={headerStyles.title} to='/'>
                    <img src={signiture}></img>
                </Link>
            </div>
            <nav className={headerStyles.headerNav}>
                <ul className={headerStyles.navList}>
                    {routes.map((route) => (
                        <Tab route={route} key={route.url} />
                    ))}
                </ul>
            </nav>
            <input type="checkbox" className={scrollTop === 0 ? headerStyles.toggler : `${headerStyles.toggler} ${headerStyles.stickToggler}`} />
            <div className={scrollTop === 0 ? headerStyles.hamburger : `${headerStyles.hamburger} ${headerStyles.stickHamburger}`} >
                <div></div>
            </div>
        </header>
    )
}

export default Header
import React, { useState } from "react"
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

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
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
        </header>
    )
}

export default Header
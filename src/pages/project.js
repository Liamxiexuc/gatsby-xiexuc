import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import projectStyles from './project.module.scss'

const ProjectPage = () => {
    return (
        <Layout>
            <h1 className={projectStyles.pageTitle}>Projects</h1>
            <p>Some of the projects I've worked on.</p>
        </Layout>
    )
}

export default ProjectPage

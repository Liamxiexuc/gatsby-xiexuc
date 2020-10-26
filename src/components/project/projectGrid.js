import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from './ProjectCard'
import projectStyles from './project.module.scss'

const ProjectGrid = ({ projects }) => {

    const sorter = sort => {
        return (a, b) => {
            const value1 = Number(a.node.frontmatter[sort]);
            const value2 = Number(b.node.frontmatter[sort]);
            return value1 - value2;
        }
    }
    
    const sortProjects = projects.sort(sorter('sort'))

    return (
        <div className={projectStyles.wrap}>
            {
                sortProjects.map(project => {
                    const { title, date, coverImage, brief, keywords } = project.node.frontmatter;
                    const { slug } = project.node.fields;

                    return (
                        <Link to={slug} key={slug}>
                            <ProjectCard title={title} date={date} coverImage={coverImage} brief={brief} keyword={keywords}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProjectGrid;
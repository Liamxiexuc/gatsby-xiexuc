import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from './ProjectCard'
import projectStyles from './project.module.scss'

const ProjectGrid = ({ projects }) => {
    console.log(projects)
    return (
        <div className={projectStyles.wrap}>
            {
                projects.map(project => {
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
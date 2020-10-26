import React from 'react'
import Img from "gatsby-image"
import projectStyles from './project.module.scss'

const ProjectCard = ({ title, coverImage, date, brief, keywords }) => {

    return (
        <div className={projectStyles.card}>
            <div className={projectStyles.cardHeader}>
                <h3>{title}</h3>    
            </div>
            <div className={projectStyles.cardBody}>
                <div className={projectStyles.imgWrap}>
                    <Img fluid={coverImage.childImageSharp.fluid}/>
                </div>
            </div>
            <div className={projectStyles.cardFooter}>
                <p>{brief}</p>    
            </div>
        </div>
    )
}

export default ProjectCard;



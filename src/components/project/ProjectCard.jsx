import React from 'react';
import Img from 'gatsby-image';
import Tilt from 'react-parallax-tilt';
import projectStyles from './project.module.scss';

const ProjectCard = ({ title, coverImage, brief }) => {
  return (
    <div className={projectStyles.card}>
      <div className={projectStyles.cardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={projectStyles.cardBody}>
        <div className={projectStyles.imgWrap}>
          <Tilt
            glareEnable
            glareMaxOpacity={0.9}
            scale="1.15"
            glareColor="#fff"
            glarePosition="all"
          >
            <Img
              alt="project"
              fluid={coverImage.childImageSharp.fluid}
              className={projectStyles.cardImgWrapper}
            />
          </Tilt>
        </div>
      </div>
      <div className={projectStyles.cardFooter}>
        <p>{brief}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

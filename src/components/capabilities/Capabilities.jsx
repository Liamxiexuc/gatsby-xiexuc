import React, { Fragment } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import capabilitiesStyles from './capabilities.module.scss';

const Capabilities = () => {
  const datas = [
    {
      title: 'Web Design',
      content:
        'I design and create good looking and responsive interface with a good user experience.',
    },
    {
      title: 'Full Stack Development',
      content:
        ' I specialize in create web apps with the MERN stack & JAM stack. and have hands on experience in bring your designs to life.',
    },
    {
      title: 'Database Design',
      content:
        'Experience in designing relational database using MySQL as well as non-relational database using MongoDB.',
    },
    {
      title: 'Deployment',
      content:
        'Good understanding CI/CD. Experience in web application deployment by using AWS (EC2/S3) & Heroku. ',
    },
  ];

  return (
    <Fragment key="Capabilities">
      <section className={capabilitiesStyles.capabilities}>
        <h2>Capabilities</h2>
        <div className={capabilitiesStyles.capabilitiesWrap}>
          {datas.map(data => {
            return (
              <div className={capabilitiesStyles.item} key={data.title}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <OutboundLink
                  href="https://www.linkedin.com/in/liam-chen"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View more
                </OutboundLink>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Capabilities;

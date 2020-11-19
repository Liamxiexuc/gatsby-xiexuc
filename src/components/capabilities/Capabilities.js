import React, { Fragment } from "react"
import capabilitiesStyles from "./capabilities.module.scss"

const Capabilities = () => {
    const datas = [{
        title: 'Front End',
        content: 'I design and create good looking and responsive interface with modern front-end tech stack. Specialize in React and have hands on experience in bring your designs to life.'
    },{
        title: 'Back End',
        content: 'I am familiar with Node.js (Express) and Java (Spring Boot) for building RESTful API. Understanding of server architectures and design patterns.'
    },{
        title: 'Database Design',
        content: 'Experience in designing relational database using MySQL as well as non-relational database using MongoDB.'
    },{
        title: 'Deployment',
        content: 'Good understanding CI/CD. Experience in web application deployment by using AWS (EC2/S3) & Heroku. '
    },
    ]

    return (
        <Fragment>
            <section className={capabilitiesStyles.capabilities}>
                <h2>Capabilities</h2>
                <div className={capabilitiesStyles.capabilitiesWrap}>
                    {datas.map(data => {
                        return (
                            <div className={capabilitiesStyles.item}>
                                <h3>{data.title}</h3>
                                <p>{data.content}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Fragment>
    )
}

export default Capabilities
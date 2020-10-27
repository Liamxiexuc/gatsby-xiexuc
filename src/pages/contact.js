import React from "react"
import Layout from "../components/layout"
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <h1 className={contactStyles.title}>
                Contact Me
            </h1>
            <p className={contactStyles.text}>
                This is how you can reach me...
            </p>
            <div className={contactStyles.boxes}>
                <div>
                    <span className={contactStyles.text}>Emails: </span>
                    liachenxiexu@gmail.com
                </div>
                <div>
                    <span className={contactStyles.text}>Phone: </span>
                    (061) 404-380-038
                </div>
                <div>
                <span className={contactStyles.text}>Address: </span>
                    Hobart, TAS 7053, AU
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;
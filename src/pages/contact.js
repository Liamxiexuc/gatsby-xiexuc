import React, { Fragment } from "react"
import { motion } from 'framer-motion'
import Layout from "../components/layout"
import Footer from '../components/footer'
import ContactForm from '../components/contactForm/ContactForm'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Fragment>
            <Layout>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                >
                    <h1 className={contactStyles.title}>
                        Contact Me
                    </h1>
                    <p className={contactStyles.text}>
                        This is how you can reach me...
                    </p>
                    <div className={contactStyles.boxes}>
                        <div className={contactStyles.columnInfo}>
                            <h3>Get In Touch</h3>
                            <p>Creating future-proof digital experiences is what I do. Tell me about your needs, I'd love to collaborate with you.</p>
                            <a className={contactStyles.emailLink} href="mailto:liam.xiexuc@gmail.com">liam.xiexuc@gmail.com</a>
                        </div>
                        <div className={contactStyles.columnForm}>
                            <ContactForm />
                        </div>
                    </div>
                </motion.div>
            </Layout>
            <Footer />
        </Fragment>
    )
}

export default ContactPage;
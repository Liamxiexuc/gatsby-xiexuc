import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Title from '../components/gallery/Title';
import UploadForm from '../components/gallery/UploadForm';
import ImageGrid from '../components/gallery/ImageGrid';
import Modal from '../components/gallery/Model';
import Seo from '../components/Seo'

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Fragment>
            <Seo  title='my gallery'/>
            <Layout>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -30 }}
                >
                    <Title />
                    <UploadForm />
                </motion.div>
                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            </Layout>
        </Fragment>
    )
}

export default GalleryPage;
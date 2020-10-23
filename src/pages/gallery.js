import React, { useState } from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/gallery/Title';
import UploadForm from '../components/gallery/UploadForm';
import ImageGrid from '../components/gallery/ImageGrid';
import Modal from '../components/gallery/Model';
import galleryStyles from './gallery.module.scss'

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Layout>
            <section className={galleryStyles.galleryBox}>
                <Title />
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            </section>
        </Layout>
    )
}

export default GalleryPage;
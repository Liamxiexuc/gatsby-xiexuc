import React, { useState } from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/gallery/Title';
import UploadForm from '../components/gallery/UploadForm';
import ImageGrid from '../components/gallery/ImageGrid';
import Modal from '../components/gallery/Model';

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Layout>
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </Layout>
    )
}

export default GalleryPage;
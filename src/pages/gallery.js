import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby'
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
                <Title />
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            </Layout>
        </Fragment>
    )
}

export default GalleryPage;
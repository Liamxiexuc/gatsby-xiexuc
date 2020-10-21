import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import galleryStyles from './gallery.module.scss'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className={galleryStyles.imgGrid}>
            {docs && docs.map(doc => (
                <motion.div
                    className={galleryStyles.imgWrap}
                    key={doc.id} 
                    layout
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img
                        src={doc.url}
                        alt="uploaded pic"
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
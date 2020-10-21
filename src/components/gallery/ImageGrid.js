import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import galleryStyles from './gallery.module.scss'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    const firstColumn = [], secondColumn = [], thirdColumn = [];
    docs.map(doc => {
        const index = docs.indexOf(doc);
        const calculate = (index + 3) % 3;
        if(calculate === 0) {
            firstColumn.push(doc);
        } else if (calculate === 1) {
            secondColumn.push(doc);
        } else {
            thirdColumn.push(doc);
        }
    })

    const width = document.body.clientWidth;
    const isMobile = width < 480 ? true : false;

    return (
        <div className={galleryStyles.imgGrid}>
            <div className={galleryStyles.imgCol}>
                {firstColumn && firstColumn.map(doc => (
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
            <div className={galleryStyles.imgCol}>
                {secondColumn && secondColumn.map(doc => (
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
            <div className={galleryStyles.imgCol}>
                {thirdColumn && thirdColumn.map(doc => (
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
        </div>
    )
}

export default ImageGrid;
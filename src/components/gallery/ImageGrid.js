import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import Loader from '../../components/loader/Loader';
import galleryStyles from './gallery.module.scss'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs, isLoading } = useFirestore('images');

    const MobileView = ({docs}) => {
        return (
            <div className={galleryStyles.imgGrid}>
                <div className={galleryStyles.imgCol}>
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
            </div>
        )
    }

    const MidView = ({docs}) => {
        const firstColumn = [], secondColumn = [];
        docs.map(doc => {
            const index = docs.indexOf(doc);
            const calculate = (index + 2) % 2;
            if(calculate === 0) {
                firstColumn.push(doc);
            } else {
                secondColumn.push(doc);
            }
        })
        

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
        </div>
        )
    }

    const LargeView = ({docs}) => {
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

    const ImgView = ({docs}) => {
        const width = document.body.clientWidth;
        if(width>992) {
            return <LargeView docs={docs} />;
        } else if (width>374) {
            return <MidView docs={docs} />;
        } else {
            return <MobileView docs={docs} />;
        }
    }

    return (
        <React.Fragment>
            {isLoading ? <Loader /> : <ImgView docs={docs}/>}
        </React.Fragment>
    )
}

export default ImageGrid;
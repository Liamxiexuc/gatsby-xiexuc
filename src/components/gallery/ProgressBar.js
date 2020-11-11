import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import galleryStyles from './gallery.module.scss'

const ProgressBar = ({ file, setFile, setError }) => {
    const { progress, url, error } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
        if (error) {
            setError('You are not allowed');
            setFile(null);
        }
    }, [url, setFile, error]); 

    return (
        <motion.div 
            className={galleryStyles.progressBar}
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;
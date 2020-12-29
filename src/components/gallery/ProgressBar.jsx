import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../../hooks/useStorage';
import galleryStyles from './gallery.module.scss';

const ProgressBar = ({ file, setFile, setError }) => {
  const { progress, url, error } = useStorage(file);

  useEffect(() => {
    url && setFile(null);
    if (error) {
      setError('You are not allowed');
      setFile(null);
    }
  }, [url, setFile, error, setError]);

  return (
    <motion.div
      className={galleryStyles.progressBar}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;

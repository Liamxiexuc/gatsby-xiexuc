import React from 'react';
import loaderStyles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={loaderStyles.loaderContainer}>
      <div className={loaderStyles.loader} />
    </div>
  );
};

export default Loader;

import React from 'react'
import loaderStyles from './loader.module.scss'

export const Loader = () => {

    return (
        <div className={loaderStyles.loaderContainer}>
            <div className={loaderStyles.loader}></div>
        </div>
    )
};

export default Loader;
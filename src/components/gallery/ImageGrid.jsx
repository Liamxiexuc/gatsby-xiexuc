import React from 'react';
import { motion } from 'framer-motion';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import useFirestore from '../../hooks/useFirestore';
import Loader from '../loader/Loader';
import galleryStyles from './gallery.module.scss';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs, isLoading } = useFirestore('images');

  const handleClickImg = url => {
    setSelectedImg(url);
    trackCustomEvent({
      category: 'Show Button',
      action: 'Click',
      label: 'Gallery',
    });
  };

  const MobileView = ({ docs }) => {
    return (
      <div className={galleryStyles.imgGrid}>
        <div className={galleryStyles.imgCol}>
          {docs && docs.map(doc => (
            <motion.div
              className={galleryStyles.imgWrap}
              key={doc.id}
              layout
              onClick={() => handleClickImg(doc.url)}
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
    );
  };

  const MidView = ({ docs }) => {
    const firstColumn = [];
    const secondColumn = [];
    docs.forEach(doc => {
      const index = docs.indexOf(doc);
      const calculate = (index + 2) % 2;
      if (calculate === 0) {
        firstColumn.push(doc);
      } else {
        secondColumn.push(doc);
      }
    });

    return (
      <div className={galleryStyles.imgGrid}>
        <div className={galleryStyles.imgCol}>
          {firstColumn && firstColumn.map(doc => (
            <motion.div
              className={galleryStyles.imgWrap}
              key={doc.id}
              layout
              onClick={() => handleClickImg(doc.url)}
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
              onClick={() => handleClickImg(doc.url)}
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
    );
  };

  const LargeView = ({ docs }) => {
    const firstColumn = [];
    const secondColumn = [];
    const thirdColumn = [];
    docs.forEach(doc => {
      const index = docs.indexOf(doc);
      const calculate = (index + 3) % 3;
      if (calculate === 0) {
        firstColumn.push(doc);
      } else if (calculate === 1) {
        secondColumn.push(doc);
      } else {
        thirdColumn.push(doc);
      }
    });

    return (
      <div className={galleryStyles.imgGrid}>
        <div className={galleryStyles.imgCol}>
          {firstColumn && firstColumn.map(doc => (
            <motion.div
              className={galleryStyles.imgWrap}
              key={doc.id}
              layout
              onClick={() => handleClickImg(doc.url)}
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
              onClick={() => handleClickImg(doc.url)}
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
              onClick={() => handleClickImg(doc.url)}
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
    );
  };

  const ImgView = ({ docs }) => {
    // eslint-disable-next-line no-undef
    const width = document.body.clientWidth;
    if (width > 992) {
      return <LargeView docs={docs} />;
    } else if (width > 374) {
      return <MidView docs={docs} />;
    } else {
      return <MobileView docs={docs} />;
    }
  };

  return (
    <React.Fragment key="Loader">
      {isLoading ? <Loader /> : <ImgView docs={docs} />}
    </React.Fragment>
  );
};

export default ImageGrid;

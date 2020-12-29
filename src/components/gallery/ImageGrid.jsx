import React from 'react';
import { motion } from 'framer-motion';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import useFirestore from '../../hooks/useFirestore';
import useWindowSize from '../../hooks/useWindowSize';
import Loader from '../loader/Loader';
import MasonryLayout from './MasonryLayout';
import { getGalleryLayout } from '../../utils/utils';
import galleryStyles from './gallery.module.scss';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs, isLoading } = useFirestore('images');
  const { width } = useWindowSize();
  const { columns, gap } = getGalleryLayout(width);

  const handleClickImg = url => {
    setSelectedImg(url);
    trackCustomEvent({
      category: 'Show Button',
      action: 'Click',
      label: 'Gallery',
    });
  };

  return (
    <React.Fragment key="Loader">
      {
        isLoading ? <Loader />
          : (
            <MasonryLayout columns={columns} gap={gap}>
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
            </MasonryLayout>
          )
      }

    </React.Fragment>
  );
};

export default ImageGrid;

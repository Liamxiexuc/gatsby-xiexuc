import React from 'react';
import galleryStyles from './gallery.module.scss';

const Title = () => {
  return (
    <div className={galleryStyles.title}>
      <h1>My Gallery</h1>
      <p>Some of the photos I like.</p>
    </div>
  );
};

export default Title;

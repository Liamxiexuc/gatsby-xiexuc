import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import galleryStyles from './gallery.module.scss';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/webp'];

  const changeHandler = e => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png/jpeg/webp)');
    }
  };

  return (
    <form>
      <label className={galleryStyles.label}>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className={galleryStyles.output}>
        {error && <div className={galleryStyles.error}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar file={file} setFile={setFile} setError={setError} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;

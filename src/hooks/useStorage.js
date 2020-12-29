import { useState, useEffect } from 'react';

import getFirebase from '../firebase/config';

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const { projectStorage, projectFirestore, timestamp } = getFirebase();
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on('state_changed', snap => {
      const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, err => {
      setError(err);
    }, async () => {
      const imgUrl = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ imgUrl, createdAt });
      setUrl(imgUrl);
    });
  }, [file]);

  return { progress, url, error };
};

export default useStorage;

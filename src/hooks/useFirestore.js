import { useState, useEffect } from 'react';
import getFirebase from '../firebase/config';

const useFirestore = collection => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { projectFirestore } = getFirebase();
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        const documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setIsLoading(false);
      });

    return () => unsub();
  }, [collection]);

  return { docs, isLoading };
};

export default useFirestore;

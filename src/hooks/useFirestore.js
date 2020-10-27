import { useState, useEffect } from 'react';
import useFirebase from './useFirebase';

const useFirestore = (collection) => {
    const firebase = useFirebase();
    const [docs, setDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!firebase) return;
        const unsub = firebase.firestore().collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
            setIsLoading(false);
        });

        return () => unsub();
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
    }, [firebase]);

    return { docs, isLoading };
}

export default useFirestore;
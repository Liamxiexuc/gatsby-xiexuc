import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import useFirebase from './useFirebase';

const useStorage = file => {
    const firebase = useFirebase();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (!firebase) return;
        // references
        const storageRef = firebase.storage().ref(file.name);
        const collectionRef = firebase.firestore().collection('images');

        storageRef.put(file).on('state_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, err => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = firebase.firestore.FieldValue.serverTimestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        })

    }, [file]);

    return { progress, url, error }
}

export default useStorage;
import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseStore } from '../firebase/config';

export const loadNoate = async (uid = '') => {
  if (!uid) throw new Error('the UID user Does not exist');

  const collectionRef = collection(FirebaseStore, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  docs.forEach((doc) => {
    // console.log(doc.data());
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};

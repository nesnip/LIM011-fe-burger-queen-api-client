import firebase from './config';

export const addOrder = (userId, client, products) => firebase.firestore().collection('orders').add({
  userId,
  client,
  products,
  Id: '',
  status: 'pending',
  dateEntry: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
  dateProcessed: '',
})
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
    firebase.firestore().collection('orders').doc(docRef.id).update({
      Id: docRef.id,
    });
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });


export const a = 'a';

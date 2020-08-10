import firebase from './config';

export default (Id, newStatus) => firebase.firestore().collection('orders').doc(Id).update({
  dateProcessed: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
  status: newStatus,
})
  .then((docRef) => {
    console.log('Document written with ID: ', docRef);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
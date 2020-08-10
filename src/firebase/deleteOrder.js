import firebase from './config';

export default (id) => firebase.firestore().collection('orders').doc(id).delete();

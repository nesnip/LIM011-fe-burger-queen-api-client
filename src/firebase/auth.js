import firebase from './config';

export const logIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const logOut = () => firebase.auth().signOut();

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9EPlUmkPB9R8vzzmjnqhIMlgVy2Zxf70',
  authDomain: 'burger-queen-dfa12.firebaseapp.com',
  databaseURL: 'https://burger-queen-dfa12.firebaseio.com',
  projectId: 'burger-queen-dfa12',
  storageBucket: 'burger-queen-dfa12.appspot.com',
  messagingSenderId: '355813631474',
  appId: '1:355813631474:web:78308e62ad9f60bf47376b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* const db = firebase.firestore();

const products = [
  {
    id: '01',
    name: 'Café americano',
    price: 5,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-americano.jpg?$Product_Desktop$',
    type: 'desayuno',
    dataEntry: '',
  },
  {
    id: '02',
    name: 'Café con leche',
    price: 7,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-cappuccino.jpg?$Product_Desktop$',
    type: 'desayuno',
    dataEntry: '',
  },
  {
    id: '03',
    name: 'Sandwich de jamón y queso',
    price: 10,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg?$Product_Desktop$',
    type: 'desayuno',
    dataEntry: '',
  },
  {
    id: '04',
    name: 'Jugo de frutas natural',
    price: 7,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Strawberry-Banana-Smoothie-Medium.jpg?$Product_Desktop$',
    type: 'desayuno',
    dataEntry: '',
  },
  {
    id: '05',
    name: 'Hamburguesa simple',
    price: 10,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-little-mac.jpg?$Product_Desktop$',
    type: 'almuerzo',
    dataEntry: '',
  },
  {
    id: '06',
    name: 'Hamburguesa Doble',
    price: 15,
    image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg?$Product_Desktop$',
    type: 'almuerzo',
    dataEntry: '',
  },
  {
    id: '07',
    name: 'Papas fritas',
    price: 5,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/d5/7a/e3/papas-fritas-crocantes.jpg',
    type: 'complementos',
    dataEntry: '',
  },
  {
    id: '08',
    name: 'Aros de cebolla',
    price: 5,
    image: 'https://lifeloveandgoodfood.com/wp-content/uploads/2015/06/onion-rings1-720x405.jpg',
    type: 'complementos',
    dataEntry: '',
  },
  {
    id: '09',
    name: 'Agua 500 ml',
    price: 5,
    image: 'https://plazavea.vteximg.com.br/arquivos/ids/216145-450-450/20172164.jpg?v=636917368318630000',
    type: 'bebida',
    dataEntry: '',
  },
  {
    id: '10',
    name: 'Agua 750 ml',
    price: 7,
    image: 'https://wongfood.vteximg.com.br/arquivos/ids/279030-750-750/Agua-San-Carlos-Botella-750-ml-1-30306335.jpg?v=636869952543130000',
    type: 'bebida',
    dataEntry: '',
  },
  {
    id: '11',
    name: 'Gaseosa 500 ml',
    price: 7,
    image: 'https://plazavea.vteximg.com.br/arquivos/ids/169019-450-450/281027.jpg?v=635769966855930000',
    type: 'bebida',
    dataEntry: '',
  },
  {
    id: '12',
    name: 'Gaseosa 700 ml',
    price: 10,
    image: 'https://wongfood.vteximg.com.br/arquivos/ids/252160-750-750/422251-01-4732.jpg?v=636754932237700000',
    type: 'bebida',
    dataEntry: '',
  },
];

products.forEach((obj) => {
  db.collection('products').add({
    _id: obj.id,
    name: obj.name,
    price: obj.price,
    image: obj.image,
    type: obj.type,
    dataEntry: obj.dataEntry,
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}); */

export default firebase;

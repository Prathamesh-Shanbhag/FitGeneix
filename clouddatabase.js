// Google Login Authentication
///// Firestore /////

const db = firebase.firestore();

const createThing = document.getElementById('createThing');
const priceList = document.querySelectorAll('.price');
console.log(priceList);

let priceRef;
let unsubscribe;

auth.onAuthStateChanged((user) => {
  if (user) {
    // Database Reference
    priceRef = db.collection('price');

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      priceRef.add({
        uid: user.uid,
        price: faker.commerce.price(),
        createdAt: serverTimestamp(),
      });
    };

    // Query
    unsubscribe = priceRef
      .where('uid', '==', user.uid)
      .orderBy('createdAt') // Requires a query
      .onSnapshot((querySnapshot) => {
        // Map results to an array of li elements

        const items = querySnapshot.docs.map((doc) => {
          return `<p>$${doc.data().price}<p>`;
        });

        for (x = 0; x < priceList.length; x++) {
          priceList[x].innerHTML = items.slice(-1);
        }

        console.log(items);
      });
  } else {
    // Unsubscribe when the user signs out
    unsubscribe && unsubscribe();
  }
});

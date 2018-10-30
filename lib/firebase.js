import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  projectId: 'sponsy-sn'
};

export default class Firebase {

    static myInstance = null;

    /**
     * @returns {Firebase}
     */
    static getInstance() {
        if (Firebase.myInstance == null) {
            Firebase.myInstance = new Firebase();
        }
        return this.myInstance;
    }

    constructor(){
        firebase.initializeApp(firebaseConfig);
        this.firestore = firebase.firestore();
        this.firestore.settings({timestampsInSnapshots: true});
    }

    addPost(item) {
        console.log('PROMISE - Add Post');
        return new Promise((resolve, reject) => {
            try {
                var addData = this.firestore.collection('test').add({
                    id: 'id',
                    content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', username: 'whereufrom', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}
                })
                .then(ref => {
                      console.log('Added document with ID: ', ref.id);
                      resolve(item);
                })
                .catch(err => {
                      console.log('Error: ', err);
                      reject(err);
                });
            }
            catch(error) {
                console.log('Error:' ,error);
                reject(error);
            }
        });
    }

    async getPost(post_id) {
        console.log('PROMISE - Get Post');
        return new Promise((resolve, reject) => {
            var db = firebase.firestore();
            db.collection('users').get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                  console.log(doc.id, '=>', doc.data());
                });
              })
              .catch((err) => {
                console.log('Error getting documents', err);
              });
        });
    }

    async delPost(post_id) {
        console.log('PROMISE - Remove Post');
        return new Promise((resolve, reject) => {
            if(err) {
                reject(err)
            } else {
                resolve(sisi);
            }
        });
    }

}

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
};

const ID_USER = 

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
      console.log(firebase);
    }

    async loginWithGoogle(callback) {
        console.log('Login with Google');
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: GOOGLE_APP_ANDROID_ID,
                iosClientId: GOOGLE_APP_ANDROID_ID,
                scopes: ["profile", "email", "https://www.googleapis.com/auth/youtube"]
            })
            if (result.type === "success") {
                console.log('Google login - SUCCESS');
                console.log(result);
                // Build Firebase credential with the Google access token.
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
                console.log(credential);
                // Sign in with credential from the Google user.
                const signIn = firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                    console.log(error);
                });
                console.log(signIn);
                callback(result);
            } else {
                console.log("Google login - ERROR");
                console.log(result);
            }
        } catch (e) {
            console.log("Error: ", e)
        }
    }

}

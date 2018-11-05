import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAx0CI89vxobEv6Al0c6JeIBqeR8vImEKM',
  authDomain: 'kkz-blog.firebaseapp.com',
  databaseURL: 'https://kkz-blog.firebaseio.com',
  projectId: 'kkz-blog',
  storageBucket: 'kkz-blog.appspot.com',
  messagingSenderId: '612596930860',
}

firebase.initializeApp(config)

export default firebase

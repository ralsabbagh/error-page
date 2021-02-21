// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBBEu73-BNWsx9soHCaMJQEKKKId05wqGw',
  authDomain: 'error-page-1c605.firebaseapp.com',
  databaseURL: 'https://error-page-1c605-default-rtdb.firebaseio.com',
  projectId: 'error-page-1c605',
  storageBucket: 'error-page-1c605.appspot.com',
  messagingSenderId: '781413727701',
  appId: '1:781413727701:web:31d4335791d00e07fcd15c',
  measurementId: 'G-RR825EXN4R',
};

// Call fb database
function getContent() {
  firebase
    .database()
    .ref('/' + getParameterByName('code') + '/' + getParameterByName('lang'))
    .on('value', (snapshot) => embedContent(snapshot.val()));
}

// Embed content in HTML
function embedContent(content) {
  document.getElementsByClassName('errorCode')[0].innerHTML = content.code;
  document.getElementsByClassName('errorMsg')[0].innerHTML = content.message;
  document
    .getElementsByClassName('errorImage')[0]
    .setAttribute('src', content.image);
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get Content
getContent();
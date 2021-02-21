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
    .on('value', (snapshot) => {
      embedContent(snapshot.val());
      showContent();
    });
}

// Embed content in HTML
function embedContent(content) {
  getElmntByClass('errorCode').innerHTML = content.code;
  getElmntByClass('errorMsg').innerHTML = content.message;
  getElmntByClass('errorImage').setAttribute('src', content.image);
  document.getElementsByTagName('title')[0].innerHTML = content.message;
}

// Show content
function showContent() {
  setTimeout(function () {
    getElmntByClass('loader').setAttribute('style', 'opacity:0;');
    getElmntByClass('content').setAttribute('style', 'opacity:1;');
  }, 1500);
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get Content
getContent();

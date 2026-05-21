let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

 // Firebase configuration
  
  const firebaseConfig = {
    apiKey: "AIzaSyAtowObWWCge-XTyc2p5x_ErSDhxQ4HCi8",
    authDomain: "nutrafit-b693a.firebaseapp.com",
    databaseURL: "https://nutrafit-b693a-default-rtdb.firebaseio.com",
    projectId: "nutrafit-b693a",
    storageBucket: "nutrafit-b693a.firebasestorage.app",
    messagingSenderId: "454499790927",
    appId: "1:454499790927:web:b9feea715aad0e5c5aba3a",
    measurementId: "G-GHPCB3ES9L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the "contacts" node
  const databaseRef = firebase.database().ref('contacts');
  
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get form values
    const name = document.querySelector('input[placeholder="NAME"]').value;
    const email = document.querySelector('input[placeholder="EMAIL"]').value;
    const contactNo = document.querySelector('input[placeholder="CONTACT NO"]').value;
    const message = document.querySelector('input[placeholder="MESSAGE"]').value;
  
    // Push data to Firebase
    databaseRef.push({
      name: name,
      email: email,
      contactNo: contactNo,
      message: message
    }).then(() => {
      alert("Form submitted successfully!");
    }).catch((error) => {
      console.error("Error writing to database: ", error);
    });
  });
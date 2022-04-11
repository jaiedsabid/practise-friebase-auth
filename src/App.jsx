import { useState } from "react";
import { auth } from "./firebase/firebase.init";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        setCurrentUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const {email: { value: email }, password: {value: password}} = event.target;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log('User created', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const {email: { value: email }, password: {value: password}} = event.target;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div className="container my-5 flex flex-col items-center justify-center">
      {!!currentUser ? (
        <button
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-400"
          onClick={handleGoogleSignOut}
        >
          SignOut
        </button>
      ) : (
        <button
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-400"
          onClick={handleGoogleSignIn}
        >
          Google Signin
        </button>
      )}
      {/* Signup Form */}
      <form className="block" action="" onSubmit={handleSignUp}>
        <input
          className="border rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="border rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-400"
        >
          Sign Up
        </button>
      </form>
      {/* SignIn Form */}
      <form className="block" action="" onSubmit={handleSignIn}>
        <input
          className="border rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="border rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-400"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default App;

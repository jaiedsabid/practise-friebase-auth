import { useState } from "react";
import { auth } from "./firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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

        console.log({errorCode, errorMessage, email, credential});
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
  }

  return (
    <div className="container my-5 flex items-center justify-center">
      {
        !!currentUser ? (
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
        )
      }
    </div>
  );
};

export default App;

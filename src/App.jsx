import { useFirebase } from "./hooks";

const App = () => {
  const {
    currentUser,
    handleGoogleSignIn,
    handleSignIn,
    handleSignUp,
    handleSignOut,
  } = useFirebase();

  return (
    <div className="container my-5 flex flex-col items-center justify-center">
      {!!currentUser ? (
        <button
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-400"
          onClick={handleSignOut}
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

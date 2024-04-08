import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);
// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  // Creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User in the auth state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // SingIn account
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google LogIn
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // GitHubLogIn
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    creatUser,
    singIn,
    googleLogin,
    githubLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

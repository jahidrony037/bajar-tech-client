import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = () => {
    setLoading(true);
    return signInWithEmailAndPassword();
  };

  const register = () => {
    setLoading(true);
    return createUserWithEmailAndPassword();
  };

  const logOut = () => {
    const auth = getAuth(app);
    signOut(auth);
  };

  const info = {
    user,
    loading,
    setLoading,
    login,
    register,
    logOut,
    setUser,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

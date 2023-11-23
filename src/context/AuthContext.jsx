import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(db, 'users', email) {
        watchlist: []
    }
  };
};

const AuthContext = () => {
  return <div>AuthContext</div>;
};

export default AuthContext;

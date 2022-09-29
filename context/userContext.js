import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import swal from "sweetalert";

const googleProvider = new GoogleAuthProvider();

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

//follow up
const createUserData = (
  userid,
  username,
  email,
  firstname,
  lastname,
  phone
) => {
  setDoc(doc(db, "userData", email), {
    userid,
    username,
    email,
    firstname,
    lastname,
    phone,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
    .then(() => {
      console.log("user created");
    })
    .catch((e) => {
      console.log(e);
    });
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const getUserData = (email) => {
    getDoc(doc(db, "userData", email))
      .then((res) => {
        setUserData(res.data());
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
        getUserData(res.email);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (
    email,
    password,
    name,
    firstname,
    lastname,
    phone,
    callback
  ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        createUserData(
          auth.currentUser.uid,
          name,
          auth.currentUser.email,
          firstname,
          lastname,
          phone
        );
        callback();
      })
      .then((res) => console.log(res))
      .catch((err) => {
        setError(err.message);
        swal(err.message, err.message, "error");
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password, callback) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //console.log(res)
        callback();
      })
      .catch((err) => {
        setError(err.code);
        swal(err.message, err.message, "error");
      })
      .finally(() => setLoading(false));
  };

  const signInGoogle = (callback) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        callback();
      })
      .catch((err) => {
        setError(err.code);
        swal(err.message, err.message, "error");
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = (callback) => {
    signOut(auth);
    callback();
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    userData,
    signInGoogle,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

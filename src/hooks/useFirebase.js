import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [loggedInUser, setLoggedInUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name } // recommend
            setName(newUser)

            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }




    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])



    //handle register

    const  createAccountWithGoogle =(email , password)=> {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage, "register")
            });
    };
    const hanldeName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };
    const hanldeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    //handle login
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            });
    };




    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleUserLogin,
        handleUserRegister,
        loggedInUser,
        error,
        hanldeName,
        hanldeEmail,
        hanldePassword,
        name,
        email,
        password,
        setLoggedInUser,
        setError,
        updateName,
        setUser,
        createAccountWithGoogle
    }
}

export default useFirebase;
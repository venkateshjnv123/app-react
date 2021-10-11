import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
export const AuthContext= createContext();
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthProvider = ({children}) => {
    const [user , setuser] = useState(null);
    return(
        <AuthContext.Provider 
        value ={{
            user, setuser,
            login : async(email, password) => {
                try {
                    await auth().signInWithEmailAndPassword(email, password);
                } catch(e) {
                    alert(e);
                }
            },
            
            googleLogin: async () => {
              try {
                const { idToken } = await GoogleSignin.signIn();
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                await auth().signInWithCredential(googleCredential)
                .catch(error => {
                    console.log('Something went wrong with sign up: ', error);
                });
              } catch(error) {
                console.log({error});
              }
            },
            googleRegister: async () => {
              try {
                const { idToken } = await GoogleSignin.signIn();
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                await auth().signInWithCredential(googleCredential)
  
                 .then(() => {

                    console.log('current User', auth().currentUser);
                   firestore().collection('users').doc(auth().currentUser.uid)
                   .set({
                       fname: '',
                       lname: '',
                       email: auth().currentUser.email,
                       createdAt: firestore.Timestamp.fromDate(new Date()),
                       userImg: null,
                   })
                   .catch(error => {
                       console.log('Something went wrong with added user to firestore: ', error);
                   })
                 })
                .catch(error => {
                    console.log('Something went wrong with sign up: ', error);
                });
              } catch(error) {
                console.log({error});
              }
            },

            fbRegister: async () => {
              try {
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
                if (result.isCancelled) {
                  throw 'User cancelled the login process';
                }
                const data = await AccessToken.getCurrentAccessToken();
                if (!data) {
                  throw 'Something went wrong obtaining access token';
                }
                const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
                await auth().signInWithCredential(facebookCredential)
                 .then(() => {
                   console.log('current User', auth().currentUser);
                   firestore().collection('users').doc(auth().currentUser.uid)
                   .set({
                       fname: '',
                       lname: '',
                       email: auth().currentUser.email,
                       createdAt: firestore.Timestamp.fromDate(new Date()),
                       userImg: null,
                   })
                   .catch(error => {
                       console.log('Something went wrong with added user to firestore: ', error);
                   })
                 })
                .catch(error => {
                    console.log('Something went wrong with sign up: ', error);
                });
              } catch(error) {
                console.log({error});
              }
            },

              fblogin: async () => {
                try {
                  // Attempt login with permissions
                  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
                  if (result.isCancelled) {
                    throw 'User cancelled the login process';
                  }
      
                  // Once signed in, get the users AccesToken
                  const data = await AccessToken.getCurrentAccessToken();
      
                  if (!data) {
                    throw 'Something went wrong obtaining access token';
                  }
      
                  // Create a Firebase credential with the AccessToken
                  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
                  // Sign-in the user with the credential
                  await auth().signInWithCredential(facebookCredential)
                  .catch(error => {
                      console.log('Something went wrong with sign up: ', error);
                  });
                } catch(error) {
                  console.log({error});
                }
              },

              register: async (email, password, number, name) => {
                try {
                  await auth().createUserWithEmailAndPassword(email, password)
                   .then(() => {
                     //Once the user creation has happened successfully, we can add the currentUser into firestore
                     //with the appropriate details.
                     firestore().collection('users').doc(auth().currentUser.uid)
                   .set({
                       name: name,
                       phone: number, 
                       email: email,
                       createdAt: firestore.Timestamp.fromDate(new Date()),
                         userImg: null,
                     })
                     //ensure we catch any errors at this stage to advise us if something does go wrong
                     .catch(error => {
                         alert('Something went wrong with added user to firestore: ', error);
                     })
                   })
                   //we need to catch the whole sign up process if it fails too.
                   .catch(error => {
                       alert('Something went wrong with sign up: ', error);
                   });
                } catch (e) {
                  alert(e);
                }
              },

            logout : async()=> {
                try {
                    await auth().signOut();
                }catch(e) {
                    alert(e)
                }
            }
        }} >
            {children}
        </AuthContext.Provider>
    )
}
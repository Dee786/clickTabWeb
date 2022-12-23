import * as types from "../actions/authActions";
import {fire} from "../../config/firebase"

const loginUSer = (payload) =>({
    type: types.SIGN_IN,
    payload: payload,
  });

const registerUSer = (payload) =>({
    type: types.SIGN_IN,
    payload: payload,
  });

const signOutUser = () =>({
    types:types.SIGN_OUT
  });

export const signInUser = (user,password,setError)=>(dispatch)=>{
    fire.auth().signInWithEmailAndPassword(user,password).then(user=>{
        setError("");
        dispatch(loginUSer({
                user:"username"}))
    }).catch(e=>{
        setError("errro Occur");
        return({
            error:"error Occur",
            user:{}
        });
    })
}

export const signUpUSer = (name, user, password)=>(dispatch)=>{
    fire.auth().createUserWithEmailAndPassword(user,password).then(user=>{
        fire.auth().currentUser.updateProfile({
            displayName:name
        }).then(async()=>{
            const currentUser = fire.auth().currentUser;
            console.log(currentUser);
        }).catch(e=>{
            console.log(e);
        })
    }).catch(e=>{
        console.log(e)
    })
}

export const logoutUser = ()=>(dispatch)=>{
    dispatch(signOutUser());
}

import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
export let currentUser = null;

export const setCurrentUser = (value)=>{
    currentUser = value;
}

export const initializeParse =()=>{
    const PARSE_APPLICATION_ID = "ozsYDfEzenrFkzjVhc783QnP7nh3ugNNA0pFdYmc";
    const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
    const PARSE_JAVASCRIPT_KEY = "TDET4w2jpXy2obyfnXTv2ib9TtfMp9AfNTPW9sAM";
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;
}

export const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

import { encryptStorage } from "./encryptStorage";

export const isLogin = () =>{
    return encryptStorage.getItem("user_clicktabweb") != undefined;
}
import * as api from "../api";
import * as types from "../constants/actionTypes";


export const signin = (formData, navigate) => async(dispatch) => {
    try {
        // try to signin

        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
        // try to signup

        navigate('/')
    } catch (error) {
        console.log(error);
    }
}
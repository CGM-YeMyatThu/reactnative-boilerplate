import { BASE_URL } from "../utils/constant/constant";
import { generateHttpOption } from "../utils/helper/helper";
import axios from "axios";

export default class AuthService {
    static login = (loginData) => axios.post(BASE_URL + 'login', loginData).catch((e) => {
        console.log(e);
    })

    static signUp = (signUpData) => axios.post(BASE_URL + 'signUp', signUpData).catch((e) => {
        console.log(e);
    })

    static getUserInfo = (token) => axios.post(`${BASE_URL}staff/details`, {}, generateHttpOption(token)).catch((e) => {
        console.log(e);
    })
}
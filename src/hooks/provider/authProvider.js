import { useEffect, useState } from "react";
import { AuthContext } from "../context/context";

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        isLoggedIn()
    }, [])

    const login = () => {

    }

    const logOut = () => {

    }

    const isLoggedIn = () => {
        //check user is alerady logged in or not
    }

    return (
        <AuthContext.Provider value={{ userInfo, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
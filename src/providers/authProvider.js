import React ,{useState, useEffect, createContext} from "react";
import {
    getAccessToken,
    getRefreshToken,
    refreshAccessToken,
    logout,
} from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider(props){
    console.log(props);
    const {children} = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true,
    });
    useEffect(() => {
        checkUserLogin(setUser);
    }, []);

    /*Devolvemos la pagina web para App.js */
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const checkUserLogin =(setUser) => {
    console.log("Checking if Mateo is login");
    const accessToken = getAccessToken();
    /*Validamos si el token es invalido o nulo */
    if (!accessToken) {
        const refreshToken = getRefreshToken();
        /*Validamos si el token caduco o expiro */
        if (!refreshToken) {
            /*Si hay algo en el LocalStorage lo eliminamos */
            logout();
            setUser({
                user: null,
                isLoading: false,
            });
        } else refreshAccessToken(refreshToken);
    }else{
        /*Validamos si el accessToken es valido */
        setUser({
            user: jwtDecode(accessToken),
            isLoading: false,
        });
    }
};
import React, { useState, createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const [user, setUser] = useState({
        nome: 'Audisio',
        uid: "912893812938"
    });
    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

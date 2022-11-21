import React from "react";

const AuthContext = React.createContext(
    {
        data: {},
        header:{},
        coloums: {}
    }
)

export default AuthContext;
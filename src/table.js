import React, { useContext } from "react";
import AuthContext from "./context";


function Table() {
    const ctx = useContext(AuthContext); 
        return <table border="1px">
            <thead>
                <tr>
                    {ctx.headers.map((data) => {
                        return <th>{data}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {ctx.data.map((obj) => {
                    return <tr>
                         {
                            ctx.coloums.map((key) => {
                                let val = obj
                                if(Array.isArray(key)){
                                    key.forEach((k) => {
                                        val = val[k]
                                    })
                                    return <td>{val}</td>
                                }
                                return <td>{obj[key]}</td>
                            })
                         }
                    </tr>
                })}
            </tbody>
       </table>
}

export default Table;
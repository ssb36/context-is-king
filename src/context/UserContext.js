import axios from "axios";
import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [data, setData] = useState({
        name: "",
        age: "",
        DBO: "",
        address: "",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {

        const { id, value } = e.target;

        setData({
            ...data,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:3001/users", data).then((response) => console.log(response.data));
    }

    const { name, age, DOB, address, state, pincode } = data;

    return (
        <UserContext.Provider value={{ name, age, DOB, address, state, pincode, handleChange, handleSubmit }}>{children}</UserContext.Provider>
    )
}
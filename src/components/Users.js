import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export const Users = () => {


    const [data, setData] = useState([]);

    const fetchData = () => {

        return fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    console.log(data)
    useState(() => {
        fetchData();
    }, [])

    // useEffect(() => {
    //     axios.get("http://localhost:3001/users")
    //         .then((res) => setData(...res.data));

    //     console.log(data)

    // })

    return (
        <>
            <Navbar />
            {data.map((user) => (

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.age}</p>

                    <p>{user.DOB}</p>
                    <p>{user.address}</p>
                    <p>{user.state}</p>
                    <p>{user.pincode}</p>
                </div>
            ))}
        </>
    )
}

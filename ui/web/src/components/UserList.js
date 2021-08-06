import React, { useState, useEffect } from 'react';

import axios from 'axios';

const UserList = () => {
    const [data, setData] = useState([

    ]);

    const logout = () => {
        sessionStorage.clear();
        window.location.href = "/login";
    }

    useEffect(() => {
        axios.get("http://localhost/Trainee-Associate-Assignment/bizlogic/userList.php")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            });


    }, [])

    let userName = sessionStorage.getItem('user');
    return (

        <div >
            <h3>{userName}</h3>
            <button onClick={logout}>logout</button>
            <div >
                <h1>User Details</h1>

            </div>
            <table >
                <thead>
                    <tr>
                        <th >id</th>
                        <th >name</th>
                        <th >username</th>
                        <th >email</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <th >{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default UserList

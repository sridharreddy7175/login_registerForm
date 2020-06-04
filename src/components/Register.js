import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [requsets, setRequests] = useState([])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const submitForm = (e) => {
        e.preventDefault();
        var obj = {
            name: name,
            email: email,
            password: password
        }
        console.log(obj)
        axios.post('http://localhost:5000/api/users', obj)
            .then(res => console.log(res))
            .then((data )=>{ console.log(data)})
            .catch(err=>console.log(err))
            
    }

    const fetchData = () => {
        axios.get('http://localhost:5000/api/users')
            .then((requests) => {
                console.log(requests)
                setRequests(requests.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={onChangeName} />
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={onChangeEmail} />
            <label>Password</label>
            <input type="text" name="password" value={password} onChange={onChangePassword} />
            <button onClick={submitForm}>Submit</button>
            {
                requsets.map((requset) => {
                    return <div key={requset._id}>
                        <div>{requset.name}</div>
                        <div>{requset.email}</div>
                    </div>
                })
            }
        </div>
    )
}

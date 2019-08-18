import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

import api from '../services/api';

export default function Login({ history }) {

    const [userName, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username: userName
        });

        const { _id: id } = response.data;
        console.log(id);

        history.push(`/dev/${id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Enter your GitHub username"
                />
                <button type="submit">Send</button>
            </form>
        </div>

    );
}
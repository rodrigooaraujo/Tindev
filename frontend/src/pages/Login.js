import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev" />
                <input placeholder="Enter your GitHub username" />
                <button type="submit">Send</button>
            </form>

        </div>

    );
}
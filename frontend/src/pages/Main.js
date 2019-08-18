import React, { useEffect, useState } from 'react';
import './main.css';

import api from '../services/api';

import Logo from '../assets/logo.svg';
import Like from '../assets/like.svg';
import Dislike from '../assets/dislike.svg';

export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            });

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter(user => user._id != id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id }
        });

        setUsers(users.filter(user => user._id != id));
    }

    return (
        <div className="main-container">
            <img src={Logo} alt="Tindev" />
            {users.length > 0 ?
                (<ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src="https://avatars0.githubusercontent.com/u/7944362?v=4" alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={Dislike} alt="Dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={Like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>) : (
                    <div className="empty">Finished</div>
                )}
        </div>
    )
}
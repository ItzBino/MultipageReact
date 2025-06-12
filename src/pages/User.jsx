import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const User = () => {
    return (
        <div className='user-container'>
            <h2>Users List</h2>
            <ul>
                {
                    users.map((user) => (
                        <li><Link to={`/user/${user.id}`}>{user.name} </Link></li>
                    ))
                }
            </ul>

        </div>
    )
}

export default User

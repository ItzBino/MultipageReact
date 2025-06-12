import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const UserDetails = () => {
    const { userid } = useParams()
    const User = users.find((users) => (users.id === parseInt(userid)))
    if (!User) return <p>No Details Found</p>
    return (
        <div className='userDetail-container'>
            <h1>User Detail</h1>
            <p><strong>Name:</strong> {User.name}</p>
            <p><strong>Email:</strong> {User.email}</p>
            <Link to='/user'> <button>Go Back</button></Link>
        </div>
    )
}

export default UserDetails

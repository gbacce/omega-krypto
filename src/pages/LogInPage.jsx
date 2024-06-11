import React, { useState } from 'react';
import { login } from '../api';
import { Link } from 'react-router-dom';

function LogInPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        login(user, password);
    };
    
    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return <div>
        <div className='loginWrapper'>
            <form onSubmit={handleFormSubmit}>
                <label>Email</label>
                <input value={user} onChange={handleUserChange} name='email' />
                <label>Password</label>
                <input value={password} onChange={handlePasswordChange} type='password' name='password' />
                <button>Submit</button>
            </form>
            Not signed up? <Link to='/registration'>Register</Link>
        </div>
    </div>
}

export default LogInPage;
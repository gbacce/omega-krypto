import React, { useState } from 'react';
import { register } from '../api';

function RegistrationPage() {
    const [name, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        register(name, business, email, phone, password);
    };
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleBusinessChange = (event) => {
        setBusiness(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return <div>
        <div className='loginWrapper'>
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input value={name} onChange={handleNameChange} name='name'></input>
                <label>Email</label>
                <input value={email} onChange={handleEmailChange} name='email' />
                <label>Phone Number</label>
                <input value={phone} onChange={handlePhoneChange} name='phone' />
                <label>Business Name</label>
                <input value={business} onChange={handleBusinessChange} name='business'/>
                <label>Password</label>
                <input value={password} onChange={handlePasswordChange} type='password' name='password' />
                <button>Submit</button>
            </form>
        </div>
    </div>
}

export default RegistrationPage;
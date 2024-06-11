import axios from 'axios';
import { secretKey } from './secret';

export const login = async (username, password) => {
    const response = await axios.get('http://api.com/login/user', {
        headers: {
            Authorization: `Client-ID ${secretKey}`
        },
        params: {
            username,
            password
        }
    });

    return response;
};

export const register = async (name, business, email, phone, password) => {
    const response = await axios.post('http://api.com/register/user', {
        headers: {
            Authorization: `Client-ID ${secretKey}`
        },
        params: {
            name,
            business,
            email,
            phone,
            password
        }
    });

    return response;
};
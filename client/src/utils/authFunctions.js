// ? Environment Variables
const { DATABASE_URL } = require('../config/config');

export const login = async (mail, pass) => {
    // ? API Call
    let request = await fetch(`${DATABASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email: mail, password: pass })
    })
    let response = await request.json();
    return response;
};

export const signup = async ({ name, email, password }) => {
    // ? API Call
    const request = await fetch(`${DATABASE_URL}/api/auth/signup/`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
    const response = await request.json();
    return response;
};
// ? Environment Variables
const {DATABASE_URL} = require('../config/config');

export const getAllData = async () => {
    // ? API Call
    const request = await fetch(`${DATABASE_URL}/api/notes/`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            "authtoken": localStorage.getItem('MindScribeAuthToken')
        }
    })
    const response = await request.json();
    // ? Giving All Notes to State
    return response;
};

export const addData = async (inputData) => {
    // ? API Call
    await fetch(`${DATABASE_URL}/api/notes/`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            "authtoken": localStorage.getItem('MindScribeAuthToken')
        },
        body: JSON.stringify(inputData)
    })
};

export const editData = async (id, title, description, tags) => {
    // ? API Call
    await fetch(`${DATABASE_URL}/api/notes/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            "authtoken": localStorage.getItem('MindScribeAuthToken')
        },
        body: JSON.stringify({ title, description, tags })
    })
};

export const deleteData = async (id) => {
    // ? API Call
    await fetch(`${DATABASE_URL}/api/notes/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': "application/json",
            "authtoken": localStorage.getItem('MindScribeAuthToken')
        }
    })
};
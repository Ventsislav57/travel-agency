export const register = async (userData) => {

    const response = await fetch('http://localhost:3050/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if(response.ok) {
        const result = await response.json();

        return result;

    } else {
        const errorMessage = await response.json();

        throw new Error(errorMessage.message);
    }
}

export const login = async (userData) => {


    const response = await fetch('http://localhost:3050/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if(response.ok) {
        const result = await response.json();

        return result;

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })
    }
}

export const getUserData = async (userId) => {

    const response = await fetch('http://localhost:3050/auth/user-data', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({userId})
    });

    if(response.ok) {
        const result = await response.json();

        return result;

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })
    }
}

export const editUserData = async (userId, userData) => {

    const response = await fetch('http://localhost:3050/auth/edit-user-data', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ userId, userData })
    });

    if (response.ok) {
        return 'success!';

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })
    }
}

export const deleteProfile = async (userId, userData) => {

    const response = await fetch('http://localhost:3050/auth/delete-profile', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ userId })
    });

    if (response.ok) {
        return 'success!';

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })
    }
}



export const register = async (userData) => {

    const response = await fetch('http://localhost:3050/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    if(response.ok) {
        const result = await response.json();

        return result;

    } else {
        const errorMessage = await response.json();
        console.log(errorMessage);
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
    })

    if(response.ok) {
        const result = await response.json();

        return result;

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })
    }
}

export const createComment = async (commetData) => {

    const response = await fetch('http://localhost:3050/comment/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(commetData)
    });


    if (response.ok) {
        return await response.json();

    } else {
        const errorMessage = await response.json();

        throw new Error({ message: errorMessage.message })

    }
}
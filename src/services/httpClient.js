const get = async (route) => {
    const result = await fetch(`https://developerdaniel.azurewebsites.net/${route}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return await result.json();
}

const post = async (route, content) => {
    console.log('router', route)
    const result = await fetch(`https://developerdaniel.azurewebsites.net/${route}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({content})
    });


    return await result.json();
}

export default {
    get,
    post
}
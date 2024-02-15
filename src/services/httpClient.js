const get = async (route) => {

    console.log(route)
    var route2 = import.meta.env.VITE_BACKEND_API + route
    console.log(route2)
    const result = await fetch(route2, {
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
    const result = await fetch(`${import.meta.env.VITE_BACKEND_API}${route}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...content})
    });

    return await result.json();
}

export default {
    get,
    post
}
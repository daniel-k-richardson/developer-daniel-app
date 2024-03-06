import AuthHeader from './AuthHeader.js'

const get = async (route) => {
  const result = await fetch(import.meta.env.VITE_BACKEND_API + route, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  return await result.json()
}

const post = async (route, content) => {
  console.log('router', route)
  const result = await fetch(import.meta.env.VITE_BACKEND_API + route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...content })
  })

  return await result.json()
}

const postWithAuth = async (route, content) => {
  console.log('router', route)
  const result = await fetch(import.meta.env.VITE_BACKEND_API + route, {
    method: 'POST',
    headers: AuthHeader.authHeader(),
    body: JSON.stringify({ ...content })
  })

  return await result.json()
}

export default {
  get,
  post,
  postWithAuth
}

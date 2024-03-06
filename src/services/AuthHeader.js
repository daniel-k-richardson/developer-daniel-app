import TokenService from './TokenService.js'

const authHeader = () => {
  const user = TokenService.getUser()
  if (user && user.accessToken) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + user.accessToken
    }
  }
}

export default {
  authHeader
}

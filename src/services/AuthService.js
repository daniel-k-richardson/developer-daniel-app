import HttpClient from './HttpClient.js'
import TokenService from './TokenService.js'

const login = async ({ email, password }) => {
  const result = await HttpClient.post('login', { email, password })
  if (result.accessToken) {
    TokenService.setUser(result)
  }
  return result
}

const logout = () => {
  TokenService.removeUser()
}

const getUser = () => {
  return TokenService.getUser()
}

export default {
  login,
  logout,
  getUser
}

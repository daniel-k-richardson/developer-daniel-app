import HttpClient from './HttpClient'
import TokenService from './TokenService'

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

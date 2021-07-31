import axios from 'axios'
import { authHeader } from './utils/auth-header'

export const API_BASE_URL = process.env.REACT_APP_API_ROOT
export const HOME_URL = process.env.REACT_APP_HOME_URL

const AUTH_URL = `${API_BASE_URL}/api/auth`
const API_URL = `${API_BASE_URL}/api`

export const auth = (() => {
  const login = () => {
    return axios.post(AUTH_URL + '/login', {
      username: 'michael',
      password: '4fae',
    })
  }
  const logout = () => {
    return axios.post(AUTH_URL + '/logout', {})
  }
  return {
    login,
    logout,
  }
})()

export const API = (() => {
  const getProductsWithKeyword = (keyword: string) => {
    return axios.get(API_URL + `/products/search?keyword=${keyword}`, {
      headers: authHeader(),
    })
  }
  const getProductWithCategoryAndUuid = (category: string, uuid: string) => {
    return axios.get(API_URL + `/products/${category}/${uuid}`, {
      headers: authHeader(),
    })
  }
  const getProductsWithCategory = (category: string) => {
    return axios.get(API_URL + `/products/${category}`, {
      headers: authHeader(),
    })
  }
  const getAllProducts = () => {
    return axios.get(API_URL + `/products`, {
      headers: authHeader(),
    })
  }
  return {
    getProductsWithKeyword,
    getProductWithCategoryAndUuid,
    getProductsWithCategory,
    getAllProducts,
  }
})()

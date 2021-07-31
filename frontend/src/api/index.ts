import axios from "axios";
import { authHeader } from "./utils/auth-header"

const AUTH_URL = "http://localhost:8080/api/auth"
const API_URL = "http://localhost:8080/api"

export const auth = (() => {
  const login = ()=> {
    return axios.post(AUTH_URL + "/login", {
      username: 'michael',
      password: '4fae'
    })
  }
  const logout = ()=> {
    return axios.post(AUTH_URL + "/logout", {})
  }
  return {
    login,
    logout
  }
})();


export const API = (() => {
  const getProductWithCategoryAndUuid = (category: string, uuid: string)=> {
    return axios.get(API_URL + `/products/${category}/${uuid}`, {
      headers: authHeader()
    })
  }
  const getProductsWithCategory = (category: string)=> {
    return axios.get(API_URL + `/products/${category}`, {
      headers: authHeader()
    })
  }
  const getAllProducts = ()=> {
    return axios.get(API_URL + `/products`, {
      headers: authHeader()
    })
  }
  return {
    getProductWithCategoryAndUuid,
    getProductsWithCategory,
    getAllProducts
  }
})();

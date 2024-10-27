import axios from 'axios'
import router from '@/router'

// const header = {
//   Authorization: `Bearer ${localStorage.getItem('JWT')}`
// }

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}reg`, data)
    return response.data
  } catch (error) {
    return error
  }
}

export const authUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}auth`, data)
    if(response.data) {
      localStorage.setItem('JWT', response.data.accessToken)
      localStorage.setItem('email', data.email)
      return response.data
    }
  } catch (error) {
    return error
  }
}

export const logout = async () => {
  const header = { Authorization: `Bearer ${localStorage.getItem('JWT')}`}
  try {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}auth`, { headers: header })
    if(response) {
      localStorage.clear()
      router.push({ name: 'main_page' })
    }
    return response.data
  } catch (error) {
    return error
  }
}

export const getTasks = async () => {
  const header = { Authorization: `Bearer ${localStorage.getItem('JWT')}`}
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}notes`, { headers: header })
    return response.data
  } catch (error) {
    return error
  }
}

export const createTask = async (data) => {
  const header = { Authorization: `Bearer ${localStorage.getItem('JWT')}`}
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}notes`, data, { headers: header })
    return response.data
  } catch (error) {
    return error
  }
}

export const deleteTask = async (id) => {
  const header = { Authorization: `Bearer ${localStorage.getItem('JWT')}`}
  try {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}notes/${id}`, { headers: header })
    return response.data
  } catch (error) {
    return error
  }
}
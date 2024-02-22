import Api from './httpService'

export const baseUrlAuth = `${window.location.origin}/api/auth`; 
// const baseUrlAuth = 'http://localhost:8000/api/auth'; 

export const authApi = new Api(baseUrlAuth);
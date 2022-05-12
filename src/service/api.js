import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:5000';
let token = localStorage.getItem("token");

export const getAllvendors = async () => {
    return await axios.get(`${usersUrl}/getallvendors`,{headers: {"Authorization" : `Bearer ${token}`}});
}
export const viewapprovedproduct = async () => {
    return await axios.get(`${usersUrl}/product/getproduct`,{headers: {"Authorization" : `Bearer ${token}`}});
}
export const getapprovedproduct = async () => {
    return await axios.get(`${usersUrl}/admin/getapprovedproduct`,{headers: {"Authorization" : `Bearer ${token}`}});
}

export const addVendor = async (user) => {
    return await axios.post(`${usersUrl}/register`,user);
}
export const getvendorById = async (id) => {
    return await axios.get(`${usersUrl}/admin/getvendorbyid/${id}`,{headers: {"Authorization" : `Bearer ${token}`}});
}
export const getvendorposted = async (id) => {
    return await axios.get(`${usersUrl}/product/vendorpostedproduct/${id}`,{headers: {"Authorization" : `Bearer ${token}`}});
}
export const updatevendor = async (id,user) => {
    return await axios.put(`${usersUrl}/admin/updatevendor/${id}`,user,{headers: {"Authorization" : `Bearer ${token}`}});
}
export const updateapproved = async (id,user) => {
    return await axios.put(`${usersUrl}/admin/updateapproved/${id}`,user,{headers: {"Authorization" : `Bearer ${token}`}});
}

export const deleteVendor = async (id) => {
    return await axios.delete(`${usersUrl}/admin/deletevendor/${id}`,{headers: {"Authorization" : `Bearer ${token}`}});
}

//product crud operation
export const addproduct = async (user) => {
    return await axios.post(`${usersUrl}/product/createproduct`,user);
}
// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }
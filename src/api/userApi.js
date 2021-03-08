import axiosClient from './axiosClient';

const userApi = {
    signUp: (data) => {
        const url = `/users/create`;
        return axiosClient.post(url, data);
    },
    signIn: (data) => {
        const url = `/users/login`;
        return axiosClient.post(url, { data });
    },
    upLoad: (id, image) => {
        const url = `/users/${id}`;
        return axiosClient.put(url,image);
    }
}

export default userApi;


import axiosClient from './axiosClient';

const commentApi = {
    getComments: (slug) => {
        const url = `/products/reviews/${slug}`;
        return axiosClient.get(url)
    },

    createComment: (data, slug) => {
        const url = `/products/reviews/${slug}`;
        return axiosClient.post(url, data);
    }
    // postComment: (data) => {
    //     const url = `/comments/create`;
    //     return axiosClient.post(url, { data });
    // }
};

export default commentApi;
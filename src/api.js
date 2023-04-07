import axios from 'axios';

//Here we create an axios instance with the base URL pointing to our backend express server
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const fetchPosts = async () => {
    try {
        const response = await api.get('/posts');
        console.log('fetching posts');
        return response.data;
    } catch (error) {
        console.error('error fetching posts:', error);
        return [];
    }
};

export const createPost = async (postData) => {
    try {
        const response = await api.post('/posts', postData);
        return response.data;
    } catch (error) {
        console.error('error creating post:', error);
        return null;
    }
};

export default api;
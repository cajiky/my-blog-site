import axios from 'axios';

//Here we create an axios instance with the base URL pointing to our backend express server
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
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

//function for grabbing individual posts of the id that was clicked on on the blog component
export const fetchPost = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`error fetching post with id ${id}:`, error);
        return null;
    }
}

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
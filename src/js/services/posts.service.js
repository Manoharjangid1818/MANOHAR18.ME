import axios from 'axios';

// get posts from local JSON
export const getPosts = async () => {
    const response = await axios.get( '/assets/json/articles.json' );
    return response.data;
};

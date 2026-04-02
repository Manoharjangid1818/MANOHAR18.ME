import axios from 'axios';

// get projects from local JSON
export const getProjects = async () => {
    const response = await axios.get( '/assets/json/projects.json' );
    return response.data;
};

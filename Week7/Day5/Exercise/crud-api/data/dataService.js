// Part 2: Creating a Data Module for Axios

//     Inside the crud-api directory, create a new directory named data.

//     Inside the data directory, create a new file named dataService.js.

//     In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.
const axios = require('axios');

async function fetchPosts(url) {
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error; 
    }
}
//     Export the fetchPosts function.

module.exports = {
    fetchPosts
}
import httpClient from "./httpClient";

const getBlogs = async () => {
    const result = await httpClient.get('api/blogs')
    return await result.json();
}

const postBlog = async () => {
    
}

export default {
    getBlogs,
    postBlog
}
import HttpClient from './HttpClient'

const getBlogs = async () => {
  const result = await HttpClient.get('api/blogs')
  return await result.json()
}

const postBlog = async () => {

}

export default {
  getBlogs,
  postBlog
}

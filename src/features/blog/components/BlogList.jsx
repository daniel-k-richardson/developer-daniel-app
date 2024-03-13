const BlogList = ({ items }) => {
  const handleClick = (post) => {
    console.log('Clicked on item', post)
  }

  return (
  <>
      { items.map((post) => (
                <div onClick={() => handleClick(post)} className='blogCard' key={post.id}>
                  <h1 className='blogTitle'>{post.title}</h1>
                  <p className='content'>{post.content.slice(0, 40) + '...'}</p>
                  <div className='blogFooter'>
                    <p>footer scontent {post.id}</p>
                  </div>
                </div>
      ))}
    </>
  )
}

export default BlogList

import PropTypes from 'prop-types'

export default function BlogList (props) {
  const handleClick = (post) => {
    console.log('Clicked on item', post)
  }

  return (
  <>
      { props.blogs.map((post) => (
        <div onClick={() => handleClick(post)} className='blogCard' key={post.id}>
          <h1 className='blogTitle'>{post.title}</h1>
          <p className='content'>{post.content.slice(0, 40) + '...'}</p>
          <div className='blogFooter'>
            <p>footer scontent</p>
          </div>
        </div>
      ))}
    </>
  )
}

BlogList.protoTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired
}

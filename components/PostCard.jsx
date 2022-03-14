import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.exercpt}
    </div>
  )
}

export default PostCard

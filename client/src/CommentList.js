/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {

  const renderedComments = comments.map(comment => {

    let content;

    if ( comment.status === 'approved') {
      content = comment.content
    }

    if ( comment.status === 'pending') {
      content = 'This is a comment awaiting moderation'
    }

    if ( comment.status === 'rejected') {
      content = 'This is a comment has been rejected'
    }

    return <li key= {comment.id}>{comment.content}</li>
  })
  return (
    <ul> { renderedComments }</ul>
  )
  
}

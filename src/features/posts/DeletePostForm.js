import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { makeAlert, postDeleted, postUpdated } from './postsSlice';

export const DeletePostForm = ({ postId }) => {
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  let alertMessage = useSelector((state) => state.posts.alert);
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    dispatch(postDeleted({ id: postId }));
  };

  return (
    // <section>
    //   <h2>Edit Post</h2>
    //   <form>
    //     <label htmlFor='postTitle'>Post Title:</label>
    //     <input
    //       type='text'
    //       id='postTitle'
    //       name='postTitle'
    //       placeholder="What's on your mind?"
    //       value={title}
    //       onChange={onTitleChanged}
    //     />
    //     <label htmlFor='postContent'>Content:</label>
    //     <textarea
    //       id='postContent'
    //       name='postContent'
    //       value={body}
    //       onChange={onBodyChanged}
    //     />
    //   </form>
    //   <button type='button' onClick={onSavePostClicked}>
    //     Save Post
    //   </button>
    // </section>
    alertMessage ? (
      <Alert variant='success'>{alertMessage}</Alert>
    ) : (
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSavePostClicked();
          dispatch(makeAlert('Post aggiornato!'));
        }}
        variant='danger'
        type='submit'
      >
        Conferma
      </Button>
    )
  );
};

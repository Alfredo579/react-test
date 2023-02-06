import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { makeAlert, postUpdated } from './postsSlice';

export const UpdatePostForm = ({ postId }) => {
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  let alertMessage = useSelector((state) => state.posts.alert);

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(postUpdated({ id: postId, title, body }));
    }
  };

  return alertMessage ? (
    <Alert variant='success'>{alertMessage}</Alert>
  ) : (
    <Form>
      <Form.Group className='mb-3' controlId='formAddPostTitle'>
        <Form.Label>Titolo</Form.Label>
        <Form.Control onChange={onTitleChanged} type='text' value={title} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAddPostBody'>
        <Form.Label>Contenuto</Form.Label>
        <Form.Control onChange={onBodyChanged} type='text' value={body} />
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSavePostClicked();
          dispatch(makeAlert('Post aggiornato!'));
        }}
        variant='warning'
        type='submit'
      >
        Modifica
      </Button>
    </Form>
  );
};

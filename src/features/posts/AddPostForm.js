import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createPost, makeAlert } from './postsSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.posts.alert);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(
        createPost({
          id: nanoid(),
          title,
          body,
        })
      );
      dispatch(makeAlert('Post creato correttamente'));

      setTitle('');
      setBody('');
    }
  };
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  return alertMessage ? (
    <Alert variant='success'>{alertMessage}</Alert>
  ) : (
    <Form>
      <Form.Group className='mb-3' controlId='formAddPostTitle'>
        <Form.Label>Titolo</Form.Label>
        <Form.Control
          onChange={onTitleChanged}
          type='text'
          placeholder='Titolo del post'
        />
      </Form.Group>

      <Form.Group required className='mb-3' controlId='formAddPostBody'>
        <Form.Label>Contenuto</Form.Label>
        <Form.Control
          required
          onChange={onBodyChanged}
          type='text'
          placeholder='A cosa stai pensando..'
        />
      </Form.Group>
      <Button
        disabled={!title && !body}
        onClick={(e) => {
          e.preventDefault();
          onSavePostClicked();
        }}
        variant='primary'
        type='submit'
      >
        Pubblica
      </Button>
    </Form>
  );
};

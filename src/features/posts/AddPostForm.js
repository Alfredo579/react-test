import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createPost, makeAlert } from './postsSlice';
import Alert from 'react-bootstrap/Alert';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.posts.alert);

  console.log(alertMessage);
  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(
        createPost({
          id: nanoid(),
          title,
          body,
        })
      );
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

      <Form.Group className='mb-3' controlId='formAddPostBody'>
        <Form.Label>Contenuto</Form.Label>
        <Form.Control
          onChange={onBodyChanged}
          type='text'
          placeholder='A cosa stai pensando..'
        />
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSavePostClicked();
          dispatch(makeAlert('Post creato correttamente'));
        }}
        variant='primary'
        type='submit'
      >
        Pubblica
      </Button>
    </Form>
  );
};

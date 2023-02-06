import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { makeAlert, postDeleted } from './postsSlice';

export const DeletePostForm = ({ postId }) => {
  let alertMessage = useSelector((state) => state.posts.alert);
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    dispatch(postDeleted({ id: postId }));
  };

  return alertMessage ? (
    <Alert variant='danger'>{alertMessage}</Alert>
  ) : (
    <Button
      onClick={(e) => {
        e.preventDefault();
        onSavePostClicked();
        dispatch(makeAlert('Post eliminato!'));
      }}
      variant='danger'
    >
      Conferma
    </Button>
  );
};

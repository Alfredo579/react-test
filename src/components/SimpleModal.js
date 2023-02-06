import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { makeAlert } from '../features/posts/postsSlice';

function SimpleModal({ children, isOpen, modalTitle, setIsOpen }) {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div
        className='modal show'
        onClick={() => {
          setIsOpen(false);
          dispatch(makeAlert(''));
        }}
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog onClick={(e) => e.stopPropagation()}>
          <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{children}</Modal.Body>

          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => {
                setIsOpen(false);
                dispatch(makeAlert(''));
              }}
            >
              Chiudi
            </Button>
            <Button variant='primary'>Salva</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default SimpleModal;

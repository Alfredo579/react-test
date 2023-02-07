import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SimpleModal } from '../../components/SimpleModal';
import SinglePostDetails from './SinglePostDetails';
import { UpdatePostForm } from './UpdatePostForm';
import { DeletePostForm } from './DeletePostForm';
import { usersAvatars } from '../../usersAvatars';

export const SinglePost = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalTitle, setModalTitle] = useState();

  const operations = {
    show: <SinglePostDetails post={post} />,
    edit: <UpdatePostForm postId={post.id} />,
    delete: <DeletePostForm postId={post.id} />,
  };

  return (
    <Card className='mt-3' style={{ width: '18rem' }}>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div className='mb-3'>
          <Card.Text className='display-4'>
            {usersAvatars[post.userId]}
          </Card.Text>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </div>

        <div className='d-flex justify-content-between'>
          <Button
            variant='primary'
            onClick={() => {
              setIsOpen(true);
              setModalContent('show');
              setModalTitle('Dettaglio Post');
            }}
          >
            Dettagli
          </Button>
          <Button
            variant='warning'
            onClick={() => {
              setIsOpen(true);
              setModalContent('edit');
              setModalTitle('Modifica Post');
            }}
          >
            Modifica
          </Button>
          <Button
            variant='danger'
            onClick={() => {
              setIsOpen(true);
              setModalContent('delete');
              setModalTitle('Elimina Post');
            }}
          >
            Elimina
          </Button>
        </div>
      </Card.Body>
      <SimpleModal
        isOpen={isOpen}
        modalTitle={modalTitle}
        setIsOpen={setIsOpen}
      >
        {operations[modalContent]}
      </SimpleModal>
    </Card>
  );
};

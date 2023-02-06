import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SimpleModal from '../../components/SimpleModal';
import SinglePostDetails from './SinglePostDetails';
import { UpdatePostForm } from './UpdatePostForm';
import { DeletePostForm } from './DeletePostForm';

function SinglePost({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [whatToOpen, setWhatToOpen] = useState();
  const operations = {
    show: <SinglePostDetails post={post} />,
    edit: <UpdatePostForm postId={post.id} />,
    delete: <DeletePostForm postId={post.id} />,
  };

  return (
    <Card className='mt-3' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button
          variant='primary'
          onClick={() => {
            setIsOpen(true);
            setWhatToOpen('show');
          }}
        >
          Dettagli
        </Button>
        <Button
          variant='warning'
          onClick={() => {
            setIsOpen(true);
            setWhatToOpen('edit');
          }}
        >
          Modifica
        </Button>
        <Button
          variant='danger'
          onClick={() => {
            setIsOpen(true);
            setWhatToOpen('delete');
          }}
        >
          Elimina
        </Button>
      </Card.Body>
      <SimpleModal
        isOpen={isOpen}
        modalTitle={'Dettaglio Post'}
        setIsOpen={setIsOpen}
      >
        {operations[whatToOpen]}
      </SimpleModal>
    </Card>
  );
}

export default SinglePost;

import React from 'react';
import { useState } from 'react';

import { PostsContainer } from './features/posts/PostsContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import { SimpleModal } from './components/SimpleModal';
import { AddPostForm } from './features/posts/AddPostForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <header className='header-posts-list'>
        <h2>Lista post</h2>
        <Button variant='primary' onClick={() => setIsOpen(true)}>
          Aggiungi post
        </Button>
      </header>
      <PostsContainer />
      <SimpleModal
        children={<AddPostForm />}
        isOpen={isOpen}
        modalTitle={'Aggiungi Post'}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;

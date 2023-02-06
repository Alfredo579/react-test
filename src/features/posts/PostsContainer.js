import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from './postsSlice';
import SinglePost from './SinglePost';
import Button from 'react-bootstrap/esm/Button';

export const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  // console.log(posts);

  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const postsToReverse = [...posts];

  let postsReverse = postsToReverse.reverse();

  const renderedPosts = postsReverse.map((post, index) => (
    <SinglePost style={{ width: '18rem' }} post={post} key={index} />
  ));

  return (
    <section>
      <div className='post-list'>{renderedPosts}</div>
    </section>
  );
};

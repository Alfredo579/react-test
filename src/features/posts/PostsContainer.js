import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from './postsSlice';

export const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const renderedPosts = posts.map((post, index) => (
    <article key={index}>
      <h3>{post.id}</h3>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  ));

  return (
    <section>
      <h2>Lista post</h2>
      {renderedPosts}
    </section>
  );
};

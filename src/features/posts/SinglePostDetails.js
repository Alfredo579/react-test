import { usersAvatars } from '../../usersAvatars';

function SinglePostDetails({ post }) {
  return (
    <div>
      <h3>Titolo del post:</h3>
      <p> {post.title}</p>
      <h3>Contenuto del post:</h3>
      <p>{post.body}</p>
      <h3>Autore:</h3>
      <p className='display-4'> {usersAvatars[post.userId]}</p>
    </div>
  );
}

export default SinglePostDetails;

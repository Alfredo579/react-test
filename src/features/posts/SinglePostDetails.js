function SinglePostDetails({ post }) {
  return (
    <div>
      <h3>Titolo del post:</h3>
      <p> {post.title}</p>
      <h3>contenuto del post:</h3>

      <p>{post.body}</p>
      <h3>autore:</h3>
      <p> {post.userId}</p>
    </div>
  );
}

export default SinglePostDetails;

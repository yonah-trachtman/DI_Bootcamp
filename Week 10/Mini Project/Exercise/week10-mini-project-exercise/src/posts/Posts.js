import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './postsSlice';
import ReactionButton from './ReactionButton';
import Users from '../Users/Users';
import { usePostAuther, usePostError,usePostSelector,usePostStatus } from './PostHooks';

const Post = (props) => {
  const dispatch = useDispatch();
  const posts  = usePostSelector();
  const status  = usePostStatus();
  const error = usePostError();
  const auther = usePostAuther()

  useEffect(() => {
      dispatch(fetchPost());

  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const renderPosts = posts.map(post => {
    return (
        <div key={post.id}>
        <h2 >{post.title}</h2>
        <p>{post.body}</p>
        <ReactionButton post = {post}/>
        </div>
      ) })
      


  return (
    <>
          <Users/>
      <h1>Posts</h1>
      {renderPosts}
    </>
  );
}


export default Post;
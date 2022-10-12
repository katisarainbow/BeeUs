import { useState, createContext, useContext, useEffect } from 'react';
import { getPostsRequests, createPostRequest } from '../api/posts';

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
    console.log(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequest(post);
    console.log(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, setPosts, createPost }}>
      {children}
    </postContext.Provider>
  );
};

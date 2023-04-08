import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { fetchPost } from '../api';

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await fetchPost(postId);
      console.log(postId);
      setPost(postData);
    };

    fetchPostData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
    <Box sx={{ height: '40vh' }}>
      <img src={post.image} alt="your image" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
      {/* Rest of your content goes here */}
    </Box>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">
        {post.content}
      </Typography>
    </Container>
  );
};

export default BlogPostPage;

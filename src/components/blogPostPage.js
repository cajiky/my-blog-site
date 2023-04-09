import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { fetchPost } from '../api';
import api from '../api';

//components
import Comment from "./comment";

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await fetchPost(postId);
      console.log(postId);
      setPost(postData);
    };

    fetchPostData();

    const fetchComments = async () => {
      const response = await api.get(`/posts/${postId}/comments`);
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await api.post(`/posts/${postId}/comments`, { content: newComment });
        setComments([...comments, response.data]);
        setNewComment("");
    } catch (error) {
        console.error("Error posting comment", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box sx={{ height: "40vh" }}>
        <img
          src={post.image}
          alt="your image"
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
        />
      </Box>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.content}</Typography>

      <div>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
        <form onSubmit={handleCommentSubmit}>
        <TextField
          required
          fullWidth
          multiline
          rows={4}
          label="Your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button fullWidth variant="contained" color="primary" type="submit" style={{ marginTop: 8 }}>
          Post Comment
        </Button>
        </form>
      </div>
    </Container>
  );
};

export default BlogPostPage;

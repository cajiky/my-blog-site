import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import { Container, Grid, Box } from "@mui/material";
import BlogPost from "./blogPost";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Link to={`/blog/${post._id}`} style={{ textDecoration: "none" }}>
                <BlogPost
                  id={post._id}
                  title={post.title}
                  image={post.image}
                  content={post.content}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;

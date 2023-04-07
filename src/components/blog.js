//This blog component will be a container in charge of holding our individual blog posts
import {React, useState, useEffect} from 'react';
import { fetchPosts } from '../api';
import { Container, Grid, Box } from '@mui/material';
import BlogPost from "./blogPost";


const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const posts = await fetchPosts();
            setBlogPosts(posts);
        };

        fetchBlogPosts();
    }, []);

    return(
        <Container maxWidth='md'>
            <Box sx={{ my:4 }}>
                <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <BlogPost
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        />
                    </Grid>
                ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;
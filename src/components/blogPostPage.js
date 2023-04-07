//this componet will be our individual blog post pages that will be accessed by clicking on the cards of our blog page

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const BlogPostPage = () => {
    const { postId } = useParams();

    //Below we have sample data that we will replace with a function to fetch the actual blog post data from our db
    const sampleData = {
        title: `Blog Post ${postId}`,
        image: 'https://via.placeholder.com/900x300',
        content: 'This is a sample blog post. Content will be fetched from the db',
    }

    // taking  
    const { title, image, content } = sampleData;

    return(
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                {title}
            </Typography>
            <img src={image} alt={title} style={{ width: '100%', height: 'auto'}} />
            <Typography variant="body1" component="div" gutterBottom>
                {content}
            </Typography>
        </Container>
    );
};

export default BlogPostPage;
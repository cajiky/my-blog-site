//This component will be our individual  blog posts that will be housed inside of the "Blog" contianer component;

import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, image, content }) => {
    return(
        <Card>
            <CardActionArea component={Link} to={'/blog/${id}'}>
                <CardMedia 
                component="img"
                height="200"
                image={image}
                alt={title}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BlogPost;
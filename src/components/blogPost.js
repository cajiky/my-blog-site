import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, image, content }) => {
  // Function to truncate the content for preview
  const truncateContent = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const previewLength = 120; // Number of characters to show in the preview

  return (
    <Card sx={{ mb: 4 }}>
      <CardActionArea component={Link} to={`/blog/${id}`}>
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
            {truncateContent(content, previewLength)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPost;

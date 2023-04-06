//This blog component will be a container in charge of holding our individual blog posts
import React from "react";
import { Container, Grid, Box } from '@mui/material';
import BlogPost from "./blogPost";


const Blog = () => {
    return(
        <Container maxWidth='md'>
            <Box sx={{ my:4 }}>
                <Grid container spacing={4}>
                    <Grid item={12} sm={6} md={4}>
                        <BlogPost
                        title="Test Blog Post"
                        image="https://th.bing.com/th/id/OIP.ngQDDOxGjRkMJpIRFOQ2-gHaHU?pid=ImgDet&rs=1"
                        content="asldkfjas;ldkfja;sldkfjas;dlkfjas;ldkfjas;dlkfjasdlkfjas;dflkjfdksl;asl"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Blog;
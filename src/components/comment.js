import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const Comment = ({ comment }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="subtitle1">{comment.user.username}</Typography>
        <Typography variant="body2">{comment.content}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Comment;

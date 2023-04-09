const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new comment for a specific post
router.post("/posts/:postId/comments", authMiddleware, async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = new Comment({
      content,
      post: postId,
      user: req.user._id,
    });

    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: "Error creating comment", err });
  }
});

// Retrieve all comments for a specific post
router.get("/posts/:postId/comments", async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId }).populate("user", "username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching comments", err });
  }
});

// Delete a specific comment
router.delete("/comments/:commentId", authMiddleware, async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You are not authorized to delete this comment" });
    }

    await comment.remove();
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting comment", err });
  }
});

module.exports = router;

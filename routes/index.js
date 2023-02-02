const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/verifyToken");

const { signUp, signIn } = require("../controllers/auth.controller");
router.post("/signUp", signUp);
router.post("/signIn", signIn);

const {
  createPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/post.controller");
router.get("/posts", getAllPost);
router.post("/create", auth, createPost);
router.get("/post/:id", getPostById);
router.put("/post/:id", updatePostById);
router.delete("/post/:id", deletePostById);

module.exports = router;

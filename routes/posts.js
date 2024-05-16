const express = require("express");
const Posts = require("../models/posts");

//making the crud api
const router = express.Router();

//save posts
router.post("/post/save", (req, res) => {
  //instantiate the post
  let newPost = new Posts(req.body);
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Posts saved successfully",
    });
  });
});

const {
    getAllBlogs,
    getOneBlog,
    insertBlog,
    updateBlog,
    deleteBlog
  } = require("../controllers/controllers.js");
  const express = require("express");
  
  const router = express.Router();
  
  router.get("/books", getAllBlogs);
  router.get("/posts/:id", getOneBlog);
  router.post("/posts", insertBlog);
  router.put("/posts/:id", updateBlog);
  router.delete ("/posts/:id", deleteBlog)
  
  module.exports = {
    router,
  };
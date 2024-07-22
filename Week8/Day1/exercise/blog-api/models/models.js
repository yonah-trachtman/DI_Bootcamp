const { db } = require("../config/config.js")

const _getAllBlogs = () => {
    return db("posts").select("id", "title", "content").orderBy("id");
  }
  
  const _getOneBlog = (blog_id) => {
    return db("posts")
    .select("id", "title", "content")
    .where({ id: blog_id });
  }
  
  const _insertBlog = (title,content) => {
    return db("posts").insert({title,content},["id","title","content"])
  }

  const _updateBlog = (title, content, blog_id) => {
    return db("posts")
    .update({title, content})
    .where({ id: blog_id })
    .returning("id","title","content")
  }

  const _deleteBlog = (blog_id) => {
    return db("posts")
    .where({ id: blog_id })
    .del()
    .returning("id","title","content")
  }

  module.exports = {
    _getAllBlogs,
    _getOneBlog,
    _insertBlog,
    _updateBlog,
    _deleteBlog
  };
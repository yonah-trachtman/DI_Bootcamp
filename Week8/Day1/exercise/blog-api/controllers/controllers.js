const {
    _getAllBlogs,
    _getOneBlog,
    _insertBlog,
    _updateBlog,
    _deleteBlog
} = require("../models/models.js");

const getAllBlogs = (req, res) => {
    _getAllBlogs()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const getOneBlog = (req, res) => {
  const { id } = req.params;
  _getOneBlog(id)
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const updateBlog = (req, res) => {
  const { id } = req.params
  const { title, content } = req.body;
  console.log(id)
  _updateBlog(title, content, id)
    .then((result) => {
      getAllBlogs(req,res)
    })
    .catch((e) => {
        console.log(e)
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const insertBlog = (req, res) => {
    const { title, content } = req.body;
    _insertBlog(title, content)
      .then((result) => {
        console.log(result)
        getAllBlogs(req,res)
      })
      .catch((e) => {
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };

const deleteBlog = (req, res) => {
    const { id } = req.params;
    _deleteBlog(id)
      .then((result) => {
        res.json(result);
      })
      .catch((e) => {
        res.status(404).json({ message: "something went wrong!!!" });
      });
  };

module.exports = {
    getAllBlogs,
    getOneBlog,
    insertBlog,
    updateBlog,
    deleteBlog
};
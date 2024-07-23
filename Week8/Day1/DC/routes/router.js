const {
  getAllUsers,
  getOneUsers,
  updateUsers,
  createUser,
  LoginUser,
  } = require("../controllers/users.controllers.js");

  const express = require("express");
  
  const router = express.Router();

  
  router.get("/", getAllUsers);
  router.get("/:id", getOneUsers);
  router.post("/register", createUser);
  router.post("/login", LoginUser);
  router.put("/:id", updateUsers);
  
  module.exports = {
    router,
  };
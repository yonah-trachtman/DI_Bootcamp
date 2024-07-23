
const {
   _getAllUsers,
   _getOneUsers,
   _updateUsers,
   _createUser,
   _getUserByNameorMail
} = require("../models/users.models.js");

const bcrypt = require("bcrypt")

const getAllUsers = (req, res) => {
    _getAllUsers()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const getOneUsers = (req, res) => {
  const { id } = req.params;
  _getOneUsers(id)
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const updateUsers = (req, res) => {
  const { id } = req.params
  const { email, username, first_name, last_name } = req.body;
  _updateUsers(email, username, first_name, last_name, id)
    .then((result) => {
      getAllUsers(req,res)
    })
    .catch((e) => {
        console.log(e)
      res.status(404).json({ message: "something went wrong!!!" });
    });
};


const createUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  const user = { email, username, first_name, last_name, password } 
  try {
    const userInfo = await _createUser(user)
    res.status(201).json({ 
      message: "user registerd success",
      user: userInfo});
  } catch (error) {
    console.log(error.code) 
      if (error.code == 23505){
        res.status(200).json({ error: "email or user already in use" });
      } 
      res.status(500).json({ error: "internal server error" });
    }
  }


  const LoginUser = async (req, res) => {
    const{email, username, password} = req.body

    try {
      const user = await _getUserByNameorMail(email, username,)

      if(!user) {
        return res.status(404).json({ message: "user not found" });
      }

      const passwordMatch = await bcrypt.compare(password+"", user.password)
      if (!passwordMatch) {
        return res.status(401).json({ message: "authentaction failed check password" });
      }

      return res.json({
        message: "Login success",
        user: {
          userid: user.id, username: user.username
        }
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "internal server error" });
    }
  }

module.exports = {
    getAllUsers,
    getOneUsers,
    updateUsers,
    createUser,
    LoginUser,
};
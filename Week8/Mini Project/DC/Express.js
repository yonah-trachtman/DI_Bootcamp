const express = require("express")
const users = require("./users.json")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express()
const router = express()
const fs = require('fs').promises;

const getUserByUsername = async (username) => {
  try {

    const data = await fs.readFile('users.json', 'utf8');
    const users = JSON.parse(data);

    const user = users.find(user => user.username === username);
    
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log(`run on ${process.env.PORT || 3000}`);
  });

  app.use("/", express.static(`${__dirname}/public`));
  

  
  router.get("/users", (req, res) => {
    res.json(users)
  });
  router.get("/users/:id",(req, res) => {
    const { id } = req.params;
    const usersId = users.find((item) => item.id == id)
    if (!usersId)  return res.sendStatus(404)
    res.json(usersId)});



  router.post("/users/register", async (req, res) => {
    const { firstname, lastname, email, username, password } = req.body
    const hashPassword =  await bcrypt.hash(password+"", saltRounds)

    newuser = { firstname, lastname, email, username, hashPassword }
    users.push(newuser);
    res.status(201).json(newuser);
  });

  router.post("/users/login", async (req, res) => {
    const{username, password} = req.body

    try {
      const user = await getUserByUsername(username)

      if(!user) {
        return res.status(404).json({ message: "user not found" });
      }

      const passwordMatch = await bcrypt.compare(password+"", user.hashPassword)
      if (!passwordMatch) {
        return res.status(401).json({ message: "authentaction failed check password" });
      }

      return res.json({
        message: "Login success",
        user: {
          username: user.username
        }
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "internal server error" });
    }
});


  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    const updateuser = users.findIndex((item) => item.id == id);
    if (updateuser === -1) {
      return res.status(404).send("user not found");
    }
    users[updateuser] = {
      id: users[updateuser].id,
      user
    };
    res.status(200).json("user updated");});
  router.delete ("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.findIndex((item) => item.id == id);
    if (user === -1) {
      return res.status(404).send("user not found");
    }
    users.splice(user, 1);
    res.status(200).json("user deleted");
  })
  
  app.use("/", router);
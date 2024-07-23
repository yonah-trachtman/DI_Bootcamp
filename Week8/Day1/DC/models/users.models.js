const { user } = require("pg/lib/defaults.js");
const { db } = require("../config/config.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;


const _getAllUsers = () => {
    return db("users").select("id", "email", "username", "first_name", "last_name").orderBy("id");
  }
  
  const _getOneUsers = (user_id) => {
    return db("users")
    .select("id",  "email", "username", "first_name", "last_name")
    .where({ id: user_id });
  }
  

  const _updateUsers = async (email, username, first_name, last_name, user_id) => {
    const trx = await db.transaction()
    try {
      const [user] = await trx("users").update(
                  { username,  email, first_name, last_name},
                  ["username", "id"]
      )
      .where({ id: user_id })
      

      await trx("hashpwd").update(
        {
          username: user.username,
        }
      )
      .where({ id: user_id })

      await trx.commit()

      return user

    } catch (error) {
      await trx.rollback()
      throw error
    }
  }

  const _createUser = async (userinfo) => {
    const { username, password,  email, first_name, last_name} = userinfo
    
    const trx = await db.transaction()

    try {
      const [user] = await trx("users").insert(
                  { username,  email, first_name, last_name},
                  ["username", "id"]
      );
      
      const hashPassword =  await bcrypt.hash(password+"", saltRounds)

      await trx("hashpwd").insert(
        {
          username: user.username,
          password: hashPassword,
        }
      )

      await trx.commit()

      return user

    } catch (error) {
      await trx.rollback()
      throw error
    }

  }
const _getUserByNameorMail = async (email, username) => {
  try {
    
    const user = await db("users")
    .select("users.id", "users.username", "hashpwd.password")
    .join("hashpwd", {"users.username": "hashpwd.username"})
    .where("users.username", username)
    .orWhere("users.email", email)
    .first()
    return user
  } catch (error) {
    throw error
  }
}



  module.exports = {
    _getAllUsers,
    _getOneUsers,
    _updateUsers,
    _createUser,
    _getUserByNameorMail
  };
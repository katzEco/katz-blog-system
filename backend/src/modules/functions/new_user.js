// User function needs "username, name, joinedDate"

const UserModel = require('../schemas/user')

async function NewUser(users) {
  let rtnData

  const userData = new UserModel({
    username: users.username,
    name: users.name,
    joinedDate: new Date().getTime(),
  })

  try {
    await userData.save()

    rtnData = {
      status: 'success',
      message: `User created successful`,
    }
  } catch (err) {
    rtnData = {
      status: 'error',
      message: err,
    }
  }

  return rtnData
}

module.exports = NewUser

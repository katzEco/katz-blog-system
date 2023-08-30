const NewUser = require('../modules/functions/new_user')

async function UserRoutes(app) {
  app.post('/be/new_user', async (req, res) => {
    const userInp = {
      username: req.body.username,
      name: req.body.name,
    }
  
    res.json(await NewUser(userInp))
  })
}

module.exports = UserRoutes
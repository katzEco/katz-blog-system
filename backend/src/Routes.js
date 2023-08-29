const NewUser = require("./modules/functions/new_user")

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send('server spawned')
  })

  app.post('/api/new_user', async (req, res) => {
    const userInp = {
      username: req.body.username,
      name: req.body.name
    }

    res.json(await NewUser(userInp))
  })
}

module.exports = Routes
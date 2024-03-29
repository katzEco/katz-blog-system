const NewPost = require('../modules/functions/new_post')
const UpdatePost = require('../modules/functions/update_post')
const ListPosts = require('../modules/functions/list_post')

async function PostRoutes(app) {
  app.post('/be/new_post', async (req, res) => {
    const contentInp = {
      title: req.body.title,
      tags: req.body.tags,
      date: new Date().getTime().toString(),
      content: req.body.content,
      author: req.body.author,
      publish: req.body.publish,
    }

    res.json(await NewPost(contentInp))
  })

  app.post('/be/update_post', async (req, res) => {
    const contentInp = {
      id: req.body.id,
      title: req.body.title,
      tags: req.body.tags,
      lastUpdate: new Date().getTime().toString(),
      content: req.body.contents,
      publish: req.body.publish,
    }

    res.json(await UpdatePost(contentInp))
  })

  app.get('/be/list_post', async (req, res) => {
    res.json(await ListPosts())
  })
}

module.exports = PostRoutes
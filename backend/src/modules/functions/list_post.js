const PostModel = require('../schemas/post')

async function ListPosts() {
  const Post = await PostModel.find({}).sort({_id: 'desc'}).exec()

  return Post
}

module.exports = ListPosts
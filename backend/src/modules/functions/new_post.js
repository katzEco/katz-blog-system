// Contents data should have "title, tags, date, content, author(need to be an userID)"

const UserModel = require('../schemas/user')
const PostModel = require('../schemas/post')

async function NewPost(contents) {
  let rtnData

  const user = await UserModel.findOne({ username: contents.author }).exec()

  const posts = {
    title: contents.title,
    tags: contents.tags,
    date: contents.time,
    lastUpdate: contents.time,
    content: contents.mainContents,
    author: user._id,
    isPublish: contents.publish
  }

  try {
    await new PostModel(posts).save()

    rtnData = {
      status: 'success',
      message: 'Contents is added to database!'
    }
  } catch (err) {
    rtnData = {
      status: 'error',
      message: err
    }
  }

  return rtnData
}

module.exports = NewPost

const PostModel = require('../schemas/post')

async function UpdatePost(contents) {
  let rtnData

  const postLocate = await PostModel.findOne({ _id: contents.id })

  const content = {
    title: contents.title,
    tags: contents.tags,
    lastUpdate: contents.lastUpdate,
    contents: contents.content,
    isPublish: contents.publish,
  }

  if (postLocate === undefined || postLocate === null) {
    rtnData = {
      status: 'error',
      message: 'There is no post.',
    }
  } else {
    await PostModel.findOneAndUpdate({ _id: contents.id }, content)
    rtnData = {
      status: 'success',
      message: 'Post is up to dated!'
    }
  }

  return rtnData
}

module.exports = UpdatePost

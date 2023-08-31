const PostModel = require('../schemas/post')
const UserModel = require('../schemas/user')
const DateLine = require('./date')

async function ListPosts() {
  let rtnData
  const Post = await PostModel.find().sort({ _id: 'desc' }).exec()

  if (Post !== undefined || Post !== null || Post != []) {
    rtnData = []

    for (posting of Post) {
      let user = await UserModel.findOne({ _id: posting.author }).exec()

      let temp = {
        id: posting._id,
        title: posting.title,
        tags: posting.tags,
        date: DateLine(Number(posting.date)),
        author: user.name,
        isPublish: posting.isPublish,
        content: posting.content
      }

      if (rtnData != []) {
        rtnData.push(temp)
      } else {
        rtnData = [temp]
      }
    }
  } else {
    rtnData = []
  }

  return rtnData
}

module.exports = ListPosts

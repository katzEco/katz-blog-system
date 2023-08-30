const { Feed } = require('feed')

const PostModel = require('../schemas/post')

async function FeedResp() {
  const posts = await PostModel.find().exec()

  const feed = new Feed({
    title: `katsu's Blog`,
    description: '',
    id: '',
    link: '',
    image: 'https://i.imgur.com/wOb7Z4y.png',
    favicon: 'https://i.imgur.com/wOb7Z4y.png',
    copyright: 'All Right Reserved 2023, Suphakit P.',
    author: {
      name: 'Suphakit P.',
      email: 'pinyoworapot@suphakit.net',
      link: 'https://suphakit.net',
    },
  })

  for (post of posts) {
    if (post.isPublish == true) {
      feed.addItem({
        title: post.title,
        id: './post/' + post._id,
        link: './post/' + post._id,
        description: post.title,
        content: post.content,
        author: [
          {
            name: post.author,
          },
        ],
        date: new Date(Number(post.date)),
      })
    }
  }

  return feed.rss2()
}

module.exports = FeedResp

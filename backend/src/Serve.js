require('dotenv').config()

const env = process.env

function Serve(app) {
  const port = env.PORT || 3001

  app.listen(port, () => {
    console.log();
    console.log(`Server Started @ http://localhost:${port}`);
    console.log();
  })
}

module.exports = Serve
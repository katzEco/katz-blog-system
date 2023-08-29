require('dotenv').config()

const env = process.env

function Serve(app) {
  app.listen(env.PORT, () => {
    console.log();
    console.log(`Server Started @ http://localhost:${env.PORT}`);
    console.log();
  })
}

module.exports = Serve
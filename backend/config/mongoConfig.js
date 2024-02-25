const mongoose = require('mongoose');

let mongoConfig = () => {
    mongoose.connect('mongodb+srv://newmernian:nHfrXYoWszpjNlgn@cluster0.zkgjyio.mongodb.net/mernian?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
}


module.exports = mongoConfig;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models');
const path = require('path');

app.use(cors({ origin: '*' }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/post.routes')(app);
require('./routes/user.routes')(app);
require('./routes/comment.routes')(app);

app.use('/images', express.static(path.join(__dirname, 'images')));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync().then(() => {
  console.log('Resync Db');
});

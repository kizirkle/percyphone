const bcrypt = require('bcrypt');

const password = 'Lucky2001!';

bcrypt.hash(password, 10).then((hash) => {
    console.log(hash);
});
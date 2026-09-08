const {Pool} = require('pg');
const bcrypt = require('bcrypt');

//making the session
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    },
    options: '-c search_path=percyphone'
});

//----------------------------------------------------
//Admin

//returns the admin object
async function getAdminByEmail(email){
    const result = await pool.query(`
        SELECT * FROM percyphone.admin WHERE email = $1`,
        [email]
    );

    return result.rows[0]
}

//attempts to login using the email, username, and password
async function loginAdmin(username, email, password) {
    const admin = await getAdminByEmail(email);
    //if email does not match admin, fail to login
    if (!admin) {
        console.log("admin was not returned.");
        return null;
    }
    //if username does not match admin, fail to login
    if (admin.username != username){
        console.log("username was wrong.");
        return null;
    }
    //if password does not match password hash, fail to login
    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
        console.log("password could not be validated.");
        return null;
    }
    //if all of these are valid, return admin and allow someone to login
    console.log("/server/index.js validated admin correctly!");
    return admin;
}

module.exports = {loginAdmin};
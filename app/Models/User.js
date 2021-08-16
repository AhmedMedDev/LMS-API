const DB_CONNECTION = require('../../config/database.js');

const bcrypt = require('bcryptjs')

class User 
{
    /**
     * Handling Register Operation 
     * 
     * @param {*} data 
     * @returns 
     */
    static register = async data  => 
    {
        let {name, email, password, img} = data

        // Insert default img if img dosen't exist
        img = (!img) ? 'uploads/users/img/default.png' : img

        // Generate Verification Code
        let verify_code = Math.floor(Math.random() * 999999) + 100000;

        // Hash Password
        password = await bcrypt.hash(password, 10)

        // Create a new user
        return User.create(name, email, password, img, verify_code)
    }

    /**
     * Store a new recorde 
     * 
     * @param {*} name 
     * @param {*} email 
     * @param {*} password 
     * @param {*} img 
     * @param {*} verify_code 
     * @returns Promise
     */
    static create = (name, email, password, img, verify_code) => 
    {
        return DB_CONNECTION.execute( 
            'INSERT INTO users (name, email, password, img, verify_code) VALUES (?,?,?,?,?)',
            [name, email, password, img, verify_code])
    }

    /**
     * Find User By verification Code
     * 
     * @param {*} verificationCode 
     * @returns 
     */
    static findByVerificationCode = verificationCode =>
    {
        return DB_CONNECTION.execute( 
            'SELECT * FROM users WHERE verify_code = ?',
            [verificationCode])
    }

    /**
     * Activate Email Verification
     * 
     * @param {*} id 
     * @returns 
     */
    static activateEmailVerification = id => 
    {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let email_verified_at = `${date} ${time}`;

        return DB_CONNECTION.execute( 
            'UPDATE users SET email_verified_at = ? WHERE id = ?', 
            [email_verified_at, id])
    }

    /**
     * Find user by email
     * 
     * @param {*} email 
     * @returns 
     */
    static getByEmail = email => 
    {
        return DB_CONNECTION.execute( 
            'SELECT * FROM users WHERE email = ?',
            [email])
    }

    /**
     * 
     * Change password
     * 
     * @param {*} id 
     * @param {*} data 
     * @returns 
     */
    static updatePassword = async (id, data) =>
    {
        const { newPassword } = data;

        // Hash Password
        const password = await bcrypt.hash(newPassword, 10)

        return DB_CONNECTION.execute( 
            'UPDATE users SET password = ? WHERE id = ?', 
            [password, id])
    }
}

module.exports = User;
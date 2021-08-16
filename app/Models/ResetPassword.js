const DB_CONNECTION = require('../../config/database.js');

class ResetPassword
{
    static create = data => 
    {
        const {user_id , pincode} = data;

        return DB_CONNECTION.execute( 
            'INSERT INTO reset_passwords (user_id, pincode) VALUES (?,?)',
            [user_id, pincode])
    }

    static findeByPincode = pincode => 
    {
        return DB_CONNECTION.execute( 
            'SELECT * FROM reset_passwords WHERE pincode = ?',
            [pincode])
    }
}

module.exports = ResetPassword
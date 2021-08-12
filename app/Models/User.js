const DB_CONNECTION = require('../../config/database.js');

const bcrypt = require('bcryptjs')

class User 
{
    static attemp = (data, result)  => 
    {
        let {email, password} = data

        DB_CONNECTION.execute( 
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (err, res) => 
        {
            if (err) throw err;

            let isMatch = await bcrypt.compare(password, res[0].password);

            if (!isMatch) return result(null, null);

            delete res[0].password;
            
            result(null, res);
        })
    }

    static register = async (data, result)  => 
    {
        let {first_name, last_name, email, password} = data

        password = await bcrypt.hash(password, 10)

        DB_CONNECTION.execute( 
            'INSERT INTO users (first_name,	last_name, email, password) VALUES (?,?,?,?)',
            [first_name, last_name, email, password],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

}

module.exports = User;
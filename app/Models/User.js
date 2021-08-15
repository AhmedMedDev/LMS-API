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
        let {name, email, password, img} = data

        img = (!img) ? 'uploads/users/img/default.png' : img

        password = await bcrypt.hash(password, 10)

        return DB_CONNECTION.execute( 
            'INSERT INTO users (name, email, password, img) VALUES (?,?,?,?)',
            [name, email, password, img])
    }

}

module.exports = User;
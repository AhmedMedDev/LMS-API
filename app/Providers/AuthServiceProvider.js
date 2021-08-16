const User = require("../Models/User")

const bcrypt = require('bcryptjs')

class AuthServiceProvider
{
    static async attemp (data)
    {
        let {email, password} = data

        let user = await User.getByEmail(email)

        if (!isNaN(user[0])) return {auth: false}

        let isMatch = await bcrypt.compare(password, user[0][0].password);

        if (!isMatch) return {auth: false}

        return {auth: true, user: user[0][0]}
    }
}

module.exports = AuthServiceProvider
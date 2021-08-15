const Mailer = require("./Mail")
const ejs = require('ejs');
const fs = require('fs');

let VerifyEmail = class  
{
    constructor (user) {
        this.user = user
    }

    send () {
        let info = {
            to: this.user.email, 
            subject: "Verify Email ✔", 
            html: ejs.render('views/404'), 
        }

        Mailer.build(info)
    }
}

module.exports = VerifyEmail
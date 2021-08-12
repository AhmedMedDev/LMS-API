const DB_CONNECTION = require('../../config/database.js');

class Post 
{
    static getAll = result => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM posts',
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

    static getByID = (id, result) => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM posts WHERE ssn = ?',
            [id],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

    static create = (data, result) => 
    {
        const {name, created_at, updated_at} = data;

        DB_CONNECTION.execute( 
            'INSERT INTO posts (name, created_at, updated_at) VALUES (?,?,?)',
            [name, created_at, updated_at],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

    static update = (id,data, result) => 
    {
        const {name, created_at, updated_at} = data;

        DB_CONNECTION.execute( 
            'UPDATE posts SET name = ? , created_at = ? , updated_at = ? WHERE ssn = ?', 
            [name, created_at, updated_at,id],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

    static delete = (id, result) => 
    {
        DB_CONNECTION.execute( 
            'DELETE FROM posts WHERE ssn = ?',
            [id],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

}

module.exports = Post;


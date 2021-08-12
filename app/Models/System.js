const DB_CONNECTION = require('../../config/database.js');

class System 
{
    static getAll = result => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM systems',
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

    static getByID = (id, result) => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM systems WHERE id = ?',
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
            'INSERT INTO systems (name, created_at, updated_at) VALUES (?,?,?)',
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
            'UPDATE systems SET name = ? , created_at = ? , updated_at = ? WHERE id = ?', 
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
            'DELETE FROM systems WHERE ssn = ?',
            [id],
            (err, res) => 
        {
            if (err) throw err;

            result(null, res);
        })
    }

}

module.exports = System;


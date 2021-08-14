const DB_CONNECTION = require('../../config/database.js');

class System 
{
    static getAll = result => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM systems',
            (err, res) => 
        {
            if (err) return result(err, null);

            return result(null, res);
        })
    }

    static create = (data, result) => 
    {
        const {Sname} = data;

        DB_CONNECTION.execute( 
            'INSERT INTO systems (name) VALUES (?)',
            [Sname],
            (err, res) => 
        {
            if (err) return result(err, null);

            return result(null, res);
        })
    }

    static getByID = (id, result) => 
    {
        DB_CONNECTION.execute( 
            'SELECT * FROM systems WHERE id = ?',
            [id],
            (err, res) => 
        {
            if (err) return result(err, null);

            return result(null, res);
        })
    }

    static update = (id, data, result) => 
    {
        const {Sname} = data;

        DB_CONNECTION.execute( 
            'UPDATE systems SET Sname = ? WHERE id = ?', 
            [Sname, id],
            (err, res) => 
        {
            if (err) return result(err, null);

            return result(null, res);
        })
    }

    static delete = (id, result) => 
    {
        DB_CONNECTION.execute( 
            'DELETE FROM systems WHERE id = ?',
            [id],
            (err, res) => 
        {
            if (err) return result(err, null);

            return result(null, res);
        })
    }

}

module.exports = System;


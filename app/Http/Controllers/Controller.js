class Controller 
{
    static notFoundResource (res) 
    {
        return res.status(404).json({
            success : false,
            payload : "Resource not found"
        })
    }

    static queryError (res,err) 
    {
        return res.status(500).json({
            success : false,
            payload : err
        })
    }
}

module.exports = Controller;

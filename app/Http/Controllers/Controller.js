class Controller 
{
    static IsNotFound(resource, res) 
    {
        if (!resource) return res.status(404).json({
            success : false,
            payload : "Not Found"
        })
    }

}

module.exports = Controller;


class ResponseServiceProvider
{
    /** 
     * Resource is't exist 
     * 
     * @param {*} res 
     * @returns 
     */
    static notFoundResource (res) 
    {
        return res.status(404).json({
            success : false,
            payload : "Resource not found"
        })
    }

    /**
     * Server Error Response 
     * 
     * @param {*} res 
     * @param {*} err 
     * @returns 
     */
    static serverError (res,err) 
    {
        return res.status(500).json({
            success : false,
            payload : err
        })
    }
}

module.exports = ResponseServiceProvider
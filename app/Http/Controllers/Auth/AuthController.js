const jwt = require('jsonwebtoken')

class AuthController
{
    /**
     * Get the authenticated User.
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns Payload information
     */
    static me (req, res)
    {
        return res.status(200).json({
            success : true,
            payload: req.payload.data,
        })
    }

    /**
     * Generate token 
     * 
     * @param {*} payload 
     * @returns Access Token
     */
    static generateAccessToken (payload) 
    {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    }

    /**
     * Generate a new token 
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static refresh (req, res)
    {
        const accessToken = AuthController.generateAccessToken(req.payload.data)

        return AuthController.respondWithToken(accessToken, req.payload.data, res)
    }

    /**
     * Respones with token 
     * 
     * @param {*} accessToken 
     * @param {*} userInfo 
     * @param {*} res 
     * @returns 
     */
    static respondWithToken (accessToken, userInfo, res)
    {
        return res.status(200).json({
            success : true,
            token: accessToken,
            token_type: 'bearer',
            user : userInfo,
            expires_in: '30m'
        })
    }
}

module.exports = AuthController
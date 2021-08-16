const System = require("../../../Models/System");
const ResponseServiceProvider = require("../../../Providers/ResponseServiceProvider");

class SystemController 
{
    /**
     * Display a listing of the resource.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async index (req, res)
    {
        try {
            
            let systems = await System.getAll();

            return res.status(200).json({
                success : true,
                payload : systems[0]
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async store (req, res)
    {
        try {
            
            let systems = await System.create(req.body);

            return res.status(200).json({
                success : true,
                payload : systems[0]
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }

    }

    /**
     * Display the specified resource.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async show (req, res)
    {
        try {
            
            let system = await System.getByID(req.params.id);

            if (!isNaN(system[0])) 
                return ResponseServiceProvider.notFoundResource(res)

            return res.status(200).json({
                success : true,
                payload : system[0]
            })

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async update (req, res)
    {
        try {
            
            let system = await System.update(req.params.id, req.body);

            if (!system[0].affectedRows) 
                return ResponseServiceProvider.notFoundResource(res)

            return res.status(200).json({success : true})

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async destroy (req, res)
    {
        try {
            
            let system = await System.delete(req.params.id);

            if (!system[0].affectedRows) 
                return ResponseServiceProvider.notFoundResource(res)

            return res.status(200).json({success : true})

        } catch (error) {
            return ResponseServiceProvider.serverError(res, error)
        }
    }
}

module.exports = SystemController;

const System = require("../../../Models/System");

const Controller = require("../Controller");

class SystemController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    index (req, res)
    {
        System.getAll( (err, systems) => {

            if (err) return Controller.queryError(res, err)
            
            return res.status(200).json({
                success : true,
                payload : systems
            })
        })
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    store (req, res)
    {
        System.create(req.body, (err, post) => 
        {
            if (err) return Controller.queryError(res, err)
            
            return res.status(200).json({
                success : true,
                payload : post
            })
        })
    }

    /**
     * Display the specified resource.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    show (req, res)
    {
        System.getByID(req.params.id, (err, system) =>  
        {
            if (err) return Controller.queryError(res, err)

            if (!isNaN(system)) return Controller.notFoundResource(res)

            return res.status(200).json({
                success : true,
                payload : system
            })
        })
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update (req, res)
    {
        System.update(req.params.id, req.body, (err, system) => 
        {
            if (!system.affectedRows) return Controller.notFoundResource(res)

            return res.status(200).json({
                success : true,
            })
        })
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    destroy (req, res)
    {
        System.delete(req.params.id, (err, system) =>  
        {
            if (!system.affectedRows) return Controller.notFoundResource(res)

            return res.status(200).json({
                success : true,
            })
        })
    }
}

module.exports = SystemController;

const System = require("../../../Models/System");

class SystemController
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

            if (err) return res.status(400).json({
                success : false,
                payload : err
            })
            
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
      
    }

    /**
     * Display the specified resource.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    show (req, res)
    {

    }

    /**
     * Update the specified resource in storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update (req, res)
    {

    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    destroy (req, res)
    {

    }
}

module.exports = SystemController;

const Fence = require('../models/fence.model');

module.exports = {

    //FIND ALL FENCES
    findAllFences: (req, res) => {
        Fence.find()
            .then((allFences) => {
                console.log(allFences);
                res.json(allFences);
            })
            .catch((err) => {
                console.log("Error in findAllFences");
                res.json({message: "Something went wrong when findAllFences", error: err});
            })
    },

    //ADD A FENCE
    addNewFence: (req, res) => {
        Fence.create(req.body)
            .then((newFence) => {
                console.log(newFence);
                res.json(newFence);
            })
            .catch((err) => {
                console.log(`Error in addNewFence ${err}`);
                res.status(400).json(err);
            })
    },

    //FIND ONE FENCE BY ID
    findOneFence: (req, res) => {
        Fence.findOne({id: req.params.id})
            .then((oneFence) => {
                console.log(oneFence);
                res.json(oneFence);
            })
            .catch((err) => {
                console.log("Error in findOneFence");
                res.json({message: "Error in findOneFence", error: err});
            })
    },

    //DELETE A FENCE
    deleteFence: (req, res) => {
        Fence.deleteOne({_id: req.params.id})
            .then((deletedFence)=>{
                console.log(deletedFence);
                res.json(deletedFence);
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Error in deleteFence", error:err});
            })
    },

}
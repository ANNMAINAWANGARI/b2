const express = require('express');
const Model = require('../dbmodel/model')

const router = express.Router()

function validateString(req, res, next) {
    const { name } = req.body;
    if (typeof name === 'string') {
      next();
    } else {
      return res.status(400).json({ error: 'Name must be a string.' });
    }
  }

//Post Method
router.post('/', validateString,async(req, res,next) => {
    const data = new Model({
        name: req.body.name,
        
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/', async(req, res,next) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})

//Get by ID Method
router.get('/:user_id', async(req, res,next) => {
    try{
        const data = await Model.findById(req.params.user_id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/:user_id', async(req, res,next) => {
    try {
        const id = req.params.user_id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:user_id', async(req, res,next) => {
    try {
        const id = req.params.user_id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Person with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
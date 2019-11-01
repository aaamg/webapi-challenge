const router = require('express').Router();

//db actions
const actionModel = require("../data/helpers/actionModel.js");

//------\\A C T I O N S//------\\
//GET ALL ACTIONS -- WORKS
router.get('/', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    actionModel.get()
    .then( ress => {
        res.status(200).json(ress)
    })
    .catch(err => {
        res.status(500).json({error: "You are not getting all actions data back"})
    })
})

//GET by ID -- WORKS
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    actionModel.get(id)
    .then( ress => {
        res.status(200).json(ress)
    })
    .catch(err => {
        res.status(500).json({error: `You are not getting ${id} actions data back`})
    })
})

//POST -- WORKS
router.post('/', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    actionModel.insert(body)
    .then(ress => {
        res.status(200).json(ress)
    })
    .catch(ress => {
        res.status(500).json({error: "You are not getting actions data back"})
    })
})

//DEL -- WORKS
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const {description, notes} = req.body;
    actionModel.remove(id)
    .then(ress => {
        res.status(200).json(ress)
    })
    .catch(ress => {
        res.status(500).json({error: "You are not getting actions data back"})
    })
})

//Update -- WORKS
router.put('/:id', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    actionModel.update(id, body)
    .then(ress => {
        res.status(200).json(ress);
      })
      .catch(err => {
        res.status(500).json({ error: "You are not getting actions data back" });
      });
})



module.exports = router;
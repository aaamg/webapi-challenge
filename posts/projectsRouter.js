const router = require('express').Router();

//db project
const projectModel = require("../data/helpers/projectModel.js");

//------\\P R O J E C T S//------\\
//GET ALL PROJECTS -- WORKS
router.get('/', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    projectModel.get()
    .then( ress => {
        res.status(200).json(ress)
    })
    .catch(err => {
        res.status(500).json({error: "You are not getting all actions data back"})
    })
})

//GET  BY ID -- WORKS
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    projectModel.get(id)
    .then(ress =>{
        //res.status(200).json(ress)
        if(ress){
            res.status(200).json(ress)
        } else {
            res.status(404).json({error: "This project ID does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json({error: "GET ERROR: You are not getting project data back"})
    })
})

//POST -- WORKS
router.post('/', (req, res) => {
    const body = req.body;
    projectModel.insert(body)
    .then(ress => {
        res.status(200).json(ress)
    })
    .catch(ress => {
        res.status(500).json({error: "POST ERROR: You are not getting project data back"})
    })
})

//DEL -- WORKS
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const {description, notes} = req.body;
    projectModel.remove(id)
    .then(ress => {
        res.status(200).json(ress)
    })
    .catch(ress => {
        res.status(500).json({error: "DELETE ERROR: You are not getting project data back"})
    })
})

//Update -- WORKS
router.put('/:id', (req, res) => {
    const id = req.params.id;
    //const {description, notes} = req.body;
    const body = req.body;
    projectModel.update(id, body)
    .then(ress => {
        res.status(200).json(ress);
      })
      .catch(err => {
        res.status(500).json({ error: "PUT ERROR: You are not getting project data back" });
      });
})


module.exports = router;
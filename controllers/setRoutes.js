//this route will eventually need to have admin access

const express = require('express');
const router = express.Router();
const {Set, Card} = require('../models');

//GET all sets
router.get("/", async (req, res) => {
    try {
        const allSets = await Set.findAll();

        res.json(allSets);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//GET one set
router.get("/:id", async (req, res) => {
    try {
        const set = await Set.findByPk(req.params.id, {
            include:[
                {
                    model: Card,
                }
            ]
        });

        if (set) {
            return res.json(set);
        } else {
            res.status(404).json({
                msg: 'Failed to find this set.'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//POST a new set
router.post("/", async (req, res) => {
    try {
        const newSet = await Set.create(req.body);

        res.json(newSet);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//PUT - update an existing set
router.put(`/:id`, async (req, res) => {
    try {
        const updateSet = await Set.update(req.body,
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!updateSet) {
            return res.status(404).json({ msg: 'Failed to find this set.'});
        } else {
            return res.json(updateSet);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//DELETE an existing set
router.delete(`/:id`, async (req, res) => {
    try {
        const deleteSet = await Set.destroy(
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!deleteSet) {
            return res.status(404).json({ msg: 'Failed to find this set.'});
        } else {
            return res.json(deleteSet);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

module.exports = router;
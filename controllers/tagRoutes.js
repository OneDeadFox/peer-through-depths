const express = require('express');
const router = express.Router();
const {Tag, TagAssociation} = require('../models');
const jwt = require('jsonwebtoken');
const { associations } = require('../models/Card');

//GET all tags
router.get("/", async (req, res) => {
    try {
        const allTags = await Tag.findAll();

        res.json(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to find the way.' });
    }
});

//GET one tag
router.get("/:id", async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id, {
            include:[
                {
                    model: Tag,
                    as: 'Association',
                    foreignKey:'AssociationId',
                    include: [
                        {
                            model: TagAssociation,
                        }
                    ],
                }
            ]
        });

        res.json(tag);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to find the way.' });
    }
});

//POST a new tag
router.post("/", async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);

        res.json(newTag);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to find the way.' });
    }
});

//PUT - update an existing tag
router.put(`/:id`, async (req, res) => {
    try {
        const updateTag = await Tag.update(req.body,
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!updateTag) {
            return res.status(404).json({ msg: 'Failed to find this user.' });
        } else {
            return res.json(updateTag);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to find the way.' });
    }
});

//DELETE an existing tag
router.put(`/:id`, async (req, res) => {
    try {
        const deleteTag = await Tag.destroy(
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!deleteTag) {
            return res.status(404).json({ msg: 'Failed to find this user.' });
        } else {
            return res.json(deleteTag);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to find the way.' });
    }
});

module.exports = router;
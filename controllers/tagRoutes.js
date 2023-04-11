//this route will eventually need to have admin access

const express = require('express');
const router = express.Router();
const {Tag, TagAssociation} = require('../models');

//GET all tags
router.get("/", async (req, res) => {
    try {
        const allTags = await Tag.findAll();

        res.json(allTags);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
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

        if (tag) {
            return res.json(tag);
        } else {
            res.status(404).json({
                msg: 'Failed to find this tag.'
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

//POST a new tag
router.post("/", async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);

        res.json(newTag);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
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
            return res.status(404).json({ msg: 'Failed to find tag.'});
        } else {
            return res.json(updateTag);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//DELETE an existing tag
router.delete(`/:id`, async (req, res) => {
    try {
        const deleteTag = await Tag.destroy(
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!deleteTag) {
            return res.status(404).json({ msg: 'Failed to find tag.'});
        } else {
            return res.json(deleteTag);
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
const express = require('express');
const router = express.Router();
const {Deck, UserCard} = require('../models');
const jwt = require('jsonwebtoken');

//GET all decks
router.get("/", async (req, res) => {
    try {
        const allDecks = await Deck.findAll();

        res.json(allDecks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//GET one deck
router.get("/:id", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user deck data.'});
    }

    try {
        const deck = await Deck.findByPk(req.params.id, {
            include:[
                {
                    model: UserCard,
                }
            ]
        });

        if (deck) {
            return res.json(deck);
        } else {
            res.status(404).json({
                msg: 'Failed to find this deck.'
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

//POST a new deck
router.post("/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user deck data.'});
    }
    
    try {
        const newDeck = await Deck.create(req.body);

        return res.json(newDeck);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//PUT - update an existing deck
router.put(`/:id`, async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user deck data.'});
    }
    
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const findDeck = await Deck.findByPk(req.params.id);
        const updateDeck = await Deck.update(req.body,
            {
                where: {
                    id: req.params.id,
                    UserId: tokenData.id,
                }
            }
        );
        if(!findDeck) {
            return res.status(404).json({ msg: 'Failed to find this deck.'});
        } else if (!updateDeck) {
            return res.status(403).json({ msg: 'You can only update a deck you own.'});
        } else {
            return res.json(updateDeck);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//DELETE an existing deck
router.delete(`/:id`, async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user deck data.'});
    }
    
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const findDeck = await Deck.findByPk(req.params.id);
        const deleteDeck = await Deck.destroy(
            {
                where: {
                    id: req.params.id,
                    UserId: tokenData.id,
                }
            }
        );
        if(!findDeck) {
            return res.status(404).json({ msg: 'Failed to find this deck.'});
        } else if (!deleteDeck) {
            return res.status(403).json({ msg: 'You can only destroy a deck you own.'});
        } else {
            return res.json(deleteDeck);
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
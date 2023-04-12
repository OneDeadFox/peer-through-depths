//this route will eventually need to have admin access to certain areas

const express = require('express');
const router = express.Router();
const {Card, Deck, Set, UserCard, User, Tag} = require('../models');
const jwt = require('jsonwebtoken');

//GET all cards
router.get("/", async (req, res) => {
    try {
        const allCards = await Card.findAll();

        res.json(allCards);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//GET one cards
router.get("/:id", async (req, res) => {
    try {
        const card = await Card.findByPk(req.params.id, {
            include: [
                {
                    model: Tag,
                },
                {
                    model: Set,
                }
            ]
        });

        if (card) {
            return res.json(card);
        } else {
            res.status(404).json({
                msg: 'Failed to find this card.'
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

//POST a new card
router.post("/", async (req, res) => {
    try {
        const newCard = await Card.create(req.body);

        res.json(newCard);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//PUT - update an existing card
router.put(`/:id`, async (req, res) => {
    try {
        const updateCard = await Card.update(req.body,
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!updateCard) {
            return res.status(404).json({ msg: 'Failed to find this card.'});
        } else {
            return res.json(updateCard);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//DELETE an existing card
router.delete(`/:id`, async (req, res) => {
    try {
        const deleteCard = await Card.destroy(
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        if (!deleteCard) {
            return res.status(404).json({ msg: 'Failed to find this card.'});
        } else {
            return res.json(deleteCard);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//-----------------------USER CARD ROUTES----------------------

//GET all userCards
//put this feature in user route
router.get("/usercard/all/:id", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user card data.'});
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const findUser = await User.findByPk(req.params.id);
        const userCards = await UserCard.findAll({
            where: {
                UserId: req.params.id,
            }
        })

        if(!findUser) {
            return res.status(404).json({ msg: 'Failed to find this user.'});
        } else if (tokenData.id != findUser.id) {
            return res.status(403).json({ msg: 'You can only view a user cards you own.'});
        } else {
            return res.json(userCards);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//GET one userCards
router.get("/usercard/:id", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user card data.'});
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const userCards = await UserCard.findByPk(req.params.id, {
            include: [
                {model: User},
                {model: Card},
                {model: Deck},
            ]
        });

        if(!userCards) {
            return res.status(404).json({ msg: 'Failed to find this user card.'});
        } else if (userCards.User.id != tokenData.id) {
            return res.status(403).json({ msg: 'You can only view a user cards you own.'});
        } else {
            return res.json(userCards);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//POST a new userCard
router.post("/usercard/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user card data.'});
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const newUserCard = await UserCard.create({
            stapleColor: req.body.stapleColor,
            stapleType: req.body.stapleType,
            favorite: req.body.favorite,
            quantity: req.body.quantity,
            UserId: tokenData.id,
            CardId: req.body.CardId,
        });

        return res.json(newUserCard);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//PUT - update an existing userCard
router.put(`/usercard/:id`, async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user card data.'});
    }
    
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const findUserCard = await UserCard.findByPk(req.params.id);
        const updateUserCard = await UserCard.update(req.body,
            {
                where: {
                    id: req.params.id,
                    UserId: tokenData.id,
                }
            }
        );
        if(!findUserCard) {
            return res.status(404).json({ msg: 'Failed to find this card.'});
        } else if (!updateUserCard) {
            return res.status(403).json({ msg: 'You can only update a card you own.'});
        } else {
            return res.json(updateUserCard);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//DELETE an existing userCard
router.delete(`/usercard/:id`, async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user card data.'});
    }
    
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const findUserCard = await UserCard.findByPk(req.params.id);
        const deleteUserCard = await UserCard.destroy(
            {
                where: {
                    id: req.params.id,
                    UserId: tokenData.id,
                }
            }
        );
        if(!findUserCard) {
            return res.status(404).json({ msg: 'Failed to find this card.'});
        } else if (!deleteUserCard) {
            return res.status(403).json({ msg: 'You can only delete a card you own.'});
        } else {
            return res.json(deleteUserCard);
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
const express = require('express');
const {User, Card, Deck} = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

//GET all users
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.findAll();

        res.json(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//GET current user
router.get("/currentUser", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(403).json({ msg: 'You must be logged into an account to get current user data.'});
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(tokenData.id, {
            include:[
                {model: Card},
                {model: Deck}
            ]
        });

        if (user) {
            return res.json(user);
        } else {
            res.status(404).json({
                msg: 'Failed to find current user data.'
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

//GET one user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include:[
                {model: Card},
                {model: Deck}
            ]
        });

        if (user) {
            return res.json(user);
        } else {
            res.status(404).json({
                msg: 'Failed to find this user.'
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

//POST a new user
router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(
            req.body
            // {
            //     username: req.body.username,
            //     email: req.body.email,
            //     password: req.body.password,
            //     theme: req.body.theme,
            //     profilePicture: req.body.profilePicture,
            // }
        );

        const token = jwt.sign(
            {
                username: newUser.username,
                id: newUser.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '6h',
            }
        );

        res.json(
            {
                token,
                user: newUser,
            }
        );
    } catch(err) {
        console.log(err);
        res.status(500).json({
            msg: 'Your attempt to cast a new user has been countered.',
            err
        });
    }
});

//PUT - update an existing user
router.put("/:id", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged in to update user data'});
    }

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await User.findByPk(req.params.id);

        if (!currentUser) {
            return res.status(404).json({ msg: 'Failed to find this user.'});
        }
        if (currentUser.id !== tokenData.id) {
            return res.status(403).json({ msg: 'You can only update the user whom is logged in.'});
        } else {
            const updatedUser = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });

            return res.json(updatedUser);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
})

//DELETE an existing user
router.delete("/:id", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ msg: 'You must be logged in to delete a user'});
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await User.findByPk(req.params.id)

        if (!currentUser) {
            return res.status(404).json({ msg: 'Failed to find this user'});
        }
        if (currentUser.id !== tokenData.id) {
            return res.status(403).json({ msg: 'You can only delete the user whom is logged in.'});
        } else {
            const results = await User.destroy({
                where: {
                    id: req.params.id
                }
            })

            return res.json(results);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            msg: 'Failed to find the way.',
            err
        });
    }
});

//POST - login
router.post("/login", async (req, res) => {
    try {
        const currentUser = await User.findOne(
            {
                where: {
                    [Op.or]: [{ username: req.body.login }, [{ email: req.body.login }]]
                },
                include:[
                    {model: Card},
                    {model: Deck}
                ]
            }
        )

        if (!currentUser) {
            return res.status(401).json({ msg: 'Incorrect mana to login.'});
        } else if (!bcrypt.compareSync(req.body.password, currentUser.password)) {
            return res.status(401).json({ msg: 'Incorrect mana to login.'});
        } else {
            const token = jwt.sign(
                {
                    username: currentUser.username,
                    id: currentUser.id,
                    theme: currentUser.theme
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "6h",
                }
            );
            res.json({
                token,
                user: currentUser,
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

module.exports = router;
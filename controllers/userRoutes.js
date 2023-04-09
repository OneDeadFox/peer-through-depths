const express = require('express');
const {User} = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

//GET all user records
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to find all users!" })
    }
});

//GET one user records
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {include:{}});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting all users!" })
    }
});


module.exports = router;
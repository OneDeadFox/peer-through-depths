const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

const cardRoutes = require("./cardRoutes");
router.use("/cards", cardRoutes);

const deckRoutes = require("./deckRoutes");
router.use("/decks", deckRoutes);

const setRoutes = require("./setRoutes");
router.use("/sets", setRoutes);

const tagRoutes = require("./tagRoutes");
router.use("/tags", tagRoutes);

module.exports = router;
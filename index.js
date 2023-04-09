const express = require('express');
const app = express();
require('dotenv').config();
const allRoutes = require('./controllers');
const cors = require('cors');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(cors());
//what is this snippet doing
app.options('*', cors());

app.use('/api', allRoutes);

//wildcard redirect
app.get("/*", (req, res) => {
    res.send("Failed to find");
});

sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('App is listening to some dope tunes by Deltron ' + PORT);
    });
});
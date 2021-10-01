const {app,sequelize} = require('./api/server.js')
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 9000

app.use(express.static(path.join(__dirname,'client', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    sequelize.sync().then(() => console.log("ready to send out some of those dank, dank high scores baby!!"))
})

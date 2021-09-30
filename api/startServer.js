const {app,sequelize} = require('./server.js')

app.listen(9000, () => {
    sequelize.sync().then(() => console.log("ready to send out some of those dank, dank high scores baby!!"))
})

// this may shock you, but this script starts the server.

const express = require('express');
const app = express();
const { Scores, sequelize } = require('./models');

// set up headers for cross origin fetching from the client
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
})


// GET localhost:9000/scores
// returns object with sorted list of highscores.
//
// highscores is an object that looks like this:
// { scores:
//  [
//      {
//         id: 100,
//         username: 'jsaf',
//         score: 51,
//         time: 12312412,
//         createdAt: '2021-09-30T14:18:21.250Z',
//         updatedAt: '2021-09-30T14:18:21.250Z'
//       },
//      {
//         id: 13,
//         username: 'nsham',
//         score: 50,
//         time: 12313412,
//         createdAt: '2021-09-30T14:18:21.250Z',
//         updatedAt: '2021-09-30T14:18:21.250Z'
//       },
//     ]
// }
//
// length of scores array can be between 0 and 50

app.get('/scores', async (req,res)=>{
    const scores = await Scores.findAll()
    scores.sort((a,b)=>{
        return b["score"] - a["score"] || a['time'] - b['time']
    })
    res.send(JSON.stringify({scores:scores}))
})

// POST localhost:9000/scores
// request body should be of stringified JSON format
// request body needs to have fields username, score and time
// returns 400 if body doesnt have required fields
// returns 200 if things are fine.
//
// if there are 50 things in the database it finds the worst entry in the database,
// checks it agains the new entry. If the new entry is better it deletes the old
// one and adds the new one.

app.post('/scores',express.json(),async (req,res) =>{
    if (req.body.username == null || req.body.score == null|| req.body.time == null){
        res.status(400).send({})
        return
    }
    var scoresSize = await Scores.count()
    var worstScore = {'score': -Infinity,'time':Infinity }
    if (scoresSize == 50){
        const minScore = await Scores.min('score')
        const minScoreMaxTime = await Scores.max('time',{where:{'score':minScore}})
        worstScore = await Scores.findOne({where:{'score':minScore,'time':minScoreMaxTime}})
    }
    if (
        req.body.score > worstScore.score ||
        (req.body.score == worstScore.score && req.body.time < worstScore.time)
    ){
        if(worstScore.id){
            worstScore.destroy()
        }
        await Scores.create({
            username:req.body.username,
            score:req.body.score,
            time: req.body.time,
        })
    }
    res.send({})
})


module.exports = {app,sequelize}

const express = require('express');
const app = express();
const { Scores, sequelize } = require('./models');

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

app.get('/scores', async (req,res)=>{
    const scores = await Scores.findAll()
    scores.sort((a,b)=>{
        return b["score"] - a["score"] || b['time'] - a['time']
    })
    res.send(JSON.stringify({scores:scores}))
})

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

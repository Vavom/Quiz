const request = require("supertest");
const {app,sequelize} = require('../server.js')

var server

describe("tessting the API ", () => {
    beforeAll(()=>{
        server = app.listen(9000, () => {
            sequelize.sync().then(() => console.log("ready to send out some of those dank, dank high scores baby!!"))
        })
    })
    afterAll(()=>{
        server.close()
    })
    test("testing GET to empty DB", async () => {
        const response = await request(app).get("/scores");
        expect(response.text).toEqual(JSON.stringify({scores:[]}));
        expect(response.statusCode).toBe(200);
    });

    test("testing can POST single data point", async () => {
        const sendData = {username:"jsaf", score:10,time:12312412}
        const postResponse = await request(app)
            .post("/scores")
            .set('Content-type', 'application/json')
            .send(sendData);

        expect(postResponse.text).toEqual("{}");
        expect(postResponse.statusCode).toBe(200);

        const getResponse = await request(app).get("/scores");
        const responseObj = JSON.parse(getResponse.text).scores[0]

        expect(responseObj.username).toEqual(sendData.username);
        expect(responseObj.score).toEqual(sendData.score);
        expect(responseObj.time).toEqual(sendData.time);
        expect(getResponse.statusCode).toBe(200);
    });

    test("testing server only retains 50 highscores", async () => {
        var sendData = {username:"jsaf", score:0 ,time:12312412}
        for (let i = 0; i <100; i++){
            var response = await request(app)
                .post("/scores")
                .set('Content-type', 'application/json')
                .send(sendData);
            expect(response.text).toEqual("{}");
            expect(response.statusCode).toBe(200);
        }
        const getResponse = await request(app).get("/scores");
        const scoresArr = JSON.parse(getResponse.text).scores
        expect(scoresArr.length).toEqual(50);
    })

    test("server only retains the highest scores: score only", async ()=> {
        for (let i = 100; i > 0; i--){
            const sendData = {username:"jsaf", score:i,time:12312412}
            await request(app)
                .post("/scores")
                .set('Content-type', 'application/json')
                .send(sendData);
        }
        const getResponse = await request(app).get("/scores");
        const scoresArr = JSON.parse(getResponse.text).scores
        console.log(scoresArr)
        expect(scoresArr[scoresArr.length -1].score).toEqual(51);
    })

    test("server only retains the highest scores: time", async () => {
        for (let i = 1000; i >= 900; i--){
            const sendData = {username:"jsaf", score:150,time:i}
            await request(app)
                .post("/scores")
                .set('Content-type', 'application/json')
                .send(sendData);
        }
        const getResponse = await request(app).get("/scores");
        const scoresArr = JSON.parse(getResponse.text).scores
        expect(scoresArr[0].time).toEqual(900);
    })
});

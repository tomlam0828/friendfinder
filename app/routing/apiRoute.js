var friends = require("../data/friend.js")

module.exports = function(app) {
    app.get("/api/survey", function(req, res) {
        res.json(friends);
    })
    
    app.post("/api/survey", function(req, res) {
        let mySum = 0;
        for (let i = 0; i < req.body.Score.length; i++) {
            mySum += parseInt(req.body.Score[i]);
        }
        console.log(mySum);

        let friendSum = [];
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            let sum = 0;
            for (let j = 0; j < friends[i].Score.length; j++) {
                sum += friends[i].Score[j];
            }
            friendSum.push(sum);
        }

        let difference = Math.abs(mySum - friendSum[0]);
        let index = 0;
        for (let m = 0; m < friendSum.length; m++) {
            if (Math.abs(friendSum[m] - mySum) < difference) {
                difference = Math.abs(friendSum[m] - mySum);
                index = m;
            }
        }


        friends.push(req.body);

        res.json(friends[index]);
    });



    app.post("/api/clear", function (req, res) {

        friends.length = [];

        res.json({ ok: true });
    });
}

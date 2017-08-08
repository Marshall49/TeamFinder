var teams = require("../data/Team");

module.exports = function(app) {

  app.get("/api/Team", function(req, res) {
    res.json(teams);
  });
  app.post("/api/Team", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
    };

    var userData = req.body;
    var userScores = userData.scores;

    for (var i = 0; i < teams.length; i++) {
      var currentTeam = teams[i];

      console.log(currentTeam.name);

      for (var j = 0; j < currentTeam.scores.length; j++) {
        var currentTeamScore = currentTeam.scores[j];
        var currentUserScore = userScores[j];



    Team.push(userData);

    res.json(bestMatch);
  });
};

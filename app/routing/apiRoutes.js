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

    var totalDifference;

    for (var i = 0; i < teams.length; i++) {
      var currentTeam = teams[i];
      totalDifference = 0;

      console.log(currentTeam.name);

      for (var j = 0; j < currentTeam.scores.length; j++) {
        var currentTeamScore = currentTeam.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentTeamScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {

        bestMatch.name = currentTeam.name;
        bestMatch.photo = currentTeam.photo;
        bestMatch.TeamDifference = totalDifference;
      }
    }


    Team.push(userData);

    res.json(bestMatch);
  });
};

var createPolitician = function (name)
{
var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;

console.log (politician.name);

  return politician;
  };

var jane = createPolitician ("Jane Eyre");
var edward = createPolitician ("Edward Rochester");

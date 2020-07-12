//Factory function to create individual politicians
var createPolitician = function(name) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;

  //Method to add up votes
  politician.tallyUpTotalVotes = function() {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }

  };
 return politician;
};

//End factory

//Defining who the politicians are
var jane = createPolitician("Jane Eyre");
var edward = createPolitician("Edward Rochester");

//Electoral votes and their changes
jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults[9] = 1;
jane.electionResults[4] = 17;
jane.electionResults[43] = 11;

edward.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

edward.electionResults[9] = 28;
edward.electionResults[4] = 38;
edward.electionResults[43] = 27;

//Run function to add up votes
jane.tallyUpTotalVotes();
edward.tallyUpTotalVotes();

//console show vote totals
console.log(jane.totalVotes);
console.log(edward.totalVotes);

//Declaring the winner
var winner = "???";
  if (jane.totalVotes > edward.totalVotes) {
    winner = jane.name; }
  if (edward.totalVotes > jane.totalVotes)
    {winner = edward.name;}
    else {
      winner = "DRAW.";
}

//Console log to show the winner
console.log ("And the winner is " + winner + "!!!");

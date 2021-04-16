class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
   background("yellow");
fill(0);
textSize(30);
text("Result of the Quiz",340,50);
   

    //call getContestantInfo( ) here



if(allContestants!==undefined){
  fill("Blue");
   text("NOTE: The contestant who answered correct are highlighted in green",130,230);
    textSize(20);}
    


    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer){
        fill("GREEN");
      }
      else{
        fill("red");
      }
    }
    
  }

}

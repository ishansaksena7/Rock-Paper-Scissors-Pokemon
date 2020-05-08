//Game
function rpsGame(yourChoice)
{
var humanChoice,botChoice;
humanChoice=yourChoice.id;
botChoice= numberToChoice(randToRpsInt());
results = decideWinner(humanChoice, botChoice);
console.log(results)
console.log('computerChoice',botChoice)
message = finalMessage(results); //{message: 'You won', 'color': 'green'}
rpsfrontEnd(yourChoice.id,botChoice,message);
}
function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number)
{
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase= {
        'rock': {'scissors':1, 'rock':0.5,'paper': 0},
        'paper': {'rock':1 ,'paper':0.5, 'scissors': 0},
        'scissors': {'rock': 0 , 'paper': 1 , 'scissors': 0.5}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore]
}

function finalMessage([yourScore, computerScore])
{
  if(yourScore === 0)
  {
    return {'message': 'You lost!', 'color':'red'};
  }
  else if (yourScore === 0.5)
  {
      return{'message' : 'You tied!', 'color':'yellow'}
  }
  else (yourScore === 1)
  {
      return{'message' : 'You win!', 'color' : 'green'}
  }

  }
  function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage)
  {
      var imagesDatabase = {
          'rock': src="images/bulb.png",
          'paper': src="images/char.png",
          'scissors':src="images/squr.png"
      } 
      //lets remove images
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();
      document.getElementById('back').remove();

      var humanDiv =document.createElement('div');
      var botDiv = document.createElement('div');
      var messageDiv = document.createElement('div');
      var resetDiv = document.createElement('div');

      humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 length=500 style='box-shadow: 0px 10px 50px green'>"
      messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size 60px; padding: 30px; '>" + finalMessage['message'] + "<\h1>"
      botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red;'>"
      resetDiv.innerHTML = "<button onClick="+"window.location.href=window.location.href"+"; style='padding: 10px'>Play again</button>"
      
      document.getElementById('flex-box-rps-div').appendChild(botDiv);
      document.getElementById('flex-box-rps-div').appendChild(messageDiv);
      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(resetDiv);
  }



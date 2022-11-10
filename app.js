var scores, roundScore, activePlayer, gamePlaying;


init();







document.querySelector('.btn--roll').addEventListener('click', () =>{
    
        //1. Random number
       var dice = Math.floor(Math.random()*6 + 1);

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './img/dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            // Add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }else {
         // Next player
        nextPlayer();
        }
    
    

});


document.querySelector('.btn--hold').addEventListener('click', () =>{
    
         // Add current score to GLOBAL score
    scores[activePlayer] += roundScore; // isto kao scores + roundScore
    // Update the UI 
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    // Check if the player won the game

    if(scores[activePlayer] >= 30){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        
    } else {
        // Next player
        nextPlayer();
    }
    
   


   

});


    const nextPlayer = () =>{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');

    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn--new').addEventListener('click', init)
;   

function init () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // prvi igrac = 0, drugi igrac = 1;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove = ('player--active');
    document.querySelector('.player--1').classList.remove = ('player--active');
   
    document.querySelector('.player--0').classList.add = ('player--active');
    document.querySelector('.player--1').classList.remove = ('player--active');

};




// dice = Math.floor(Math.random()*6 + 1);


// document.querySelector('#current--' + activePlayer).textContent = dice;


// var x = document.querySelector('#score--0').textContent;
// console.log(x);
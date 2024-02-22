document.getElementById('play').addEventListener('click', function(){
   //Generates a random number from 1 to 6 for the player and the computer
    const player = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;

    console.log('player,computer');

})
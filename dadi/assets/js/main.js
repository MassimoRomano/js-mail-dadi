document.getElementById('play').addEventListener('click', function () {
    //Generates a random number from 1 to 6 for the player and the computer
    const scorePlayer = Math.floor(Math.random() * 6) + 1;
    const scoreComputer = Math.floor(Math.random() * 6) + 1;

    console.log('player,computer');

    // View generated scores
    document.getElementById('player').value = scorePlayer;
    document.getElementById('computer').value = scoreComputer;

    //declares the winner
    if (scorePlayer > scoreComputer) {
        alert('Hai vinto!!!')
    }else if (scorePlayer < scoreComputer){
        alert('Hai perso !!')
    }else{
        alert('Abbiamo un pareggio')
    }
})
/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

const selDifficulty = document.getElementById('select-opt');
const play =  document.getElementById('playbtn');
let containerBox = document.querySelector('.container');

play.addEventListener('click',createGrid())
    
    function createGrid(){
        let level = selDifficulty.value;

        if (level == 'easy') {
            for (i = 1; i < 49; i++) {
                containerBox.innerHTML += `<div class="square">${i}</div>`;
            }
            
    
        } else if (level == 'hard') {
            for (i = 1; i < 81; i++) {
               containerBox.innerHTML+ = `<div class="square">${i}</div>`
            }
            
    
        } else {
            for (i = 1; i < 100; i++) {
                containerBox.innerHTML+ = `<div class="square">${i}</div>`
            }
    }
    // function createGrid(max){
        
    //     for (i = 1; i <= max; i++){
    //         containerBox.innerHTML += `<div class="square">${i}</div>`; 
    //         return
    //     }    
    // }


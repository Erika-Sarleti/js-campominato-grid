/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

const selDifficulty = document.getElementById('select-opt');
const btnPlay =  document.getElementById('playbtn');
let containerBox = document.querySelector('.container');

btnPlay.addEventListener('click',function(){
    function createGrid(max){
        // let square;
        let level = selDifficulty.value;
        // containerBox.innerHTML += square;
        for (i = 1; i <= max; i++){
            containerBox.innerHTML += `<div class="square">${i}</div>`; 
        }    
        if (level == easy){
            createGrid(49);
        } else if (level == medium){
            createGrid(81);
        } else{
            createGrid(100);
        }
    }
})

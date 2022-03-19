//creo let che richiama il container in html
let container = document.getElementById("targetContainer")
//ciclo for per i 100 numeri richesti da consegna
for( let i = 1; i <= 100; i++ ){
    //stampare "fizzbuzz" se numero divisibile sia per 5 che per 3
    if( i % 5 == 0 && i % 3 == 0 ){
        let fizzBuzz = "FizzBuzz";
        container.innerHTML += `<div class="col azzurro">${fizzBuzz}</div>`;
    //stampare "fizz" se numero divisibile per 5    
    }else if( i % 5 == 0 ){
        let fizz = "Fizz";
        container.innerHTML += `<div class="col arancio">${fizz}</div>`;
    //stampare "buzz" se numero divisibile per 3
    }else if( i % 3 == 0 ){
        let buzz = "Buzz";
        container.innerHTML += `<div class="col viola">${buzz}</div>`;
    //stampare il valore se casi precedenti non verificati    
    }else{
        container.innerHTML += `<div class="col">${i}</div>`;
    } 
}
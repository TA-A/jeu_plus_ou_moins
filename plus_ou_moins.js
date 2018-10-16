/*var de = nb_aleatoire(1, 100);
var compteur =0;
var ecrit;

function nb_aleatoire(min, max)
{
    var nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
}


do {
    ecrit = prompt("Quel est le nombre caché?");

    if
        (ecrit > de)
        prompt("C'est moins");
    
    else
        (ecrit < de)
        prompt("C'est plus"); 
    }
    
while (ecrit === de);
alert ("Vous avez gagné");


console.log(de);*/
 /* Instructions 
 var formValid = document.getElementById("bouton_envoi");

 var number = document.getElementById("number");
        var missNumber = document.getElementById("missNumber");
        var numberValid = /[0-100]/;

var de = nb_aleatoire(1, 100);
alert("Vous lancez un dé et obtenez " + de);
var nb_aleatoire = prompt("Trouvez le nombre entre 1 et 100");
 
 formValid.addEventListener("click", validation);
 
 function validation(event){
     //si le champ est vide
     if (number.validity.valueMissing){
         event.preventDefault();
         missNumber.textContent = "Nombre manquant";
         missNumber.style.color = "red";
     //Si le format de données est incorrect
     }
     else if (numberValid.test(number.value) == false){
            event.preventDefault();
            missNumber.textContent = "Format incorrect";
            missNumber.style.color = "orange";
         }else{
         }
     }
     */

    var lowerLimit = 1;
    var upperLimit = 25;
    var tries = 5;
    var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    var guess = '';
    var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';
    
    // Keep prompting the user for a guess until the game ends.
    while (tries > 0) {
        // Prompt the user for a guess.
        guess = prompt(message, guess);
        
        // If the cancel button was pushed, let the user know the game is ending and
        // break out of the loop.
        if (guess == null) {
            alert('Quitting game now.');
            break;
        }
        // If the guess is a number...
        else if (isFinite(guess) && guess != '') {
            // Make sure the guess is converted into a number.
            guess = +guess;
            
            // If the guess is less than the range let the user know.
            if (guess < lowerLimit) {
                alert('Your guess should be no less than ' + lowerLimit + '.');
            }
            // If the guess is greater than the range let the user know.
            else if (guess > upperLimit) {
                alert('Your guess should be no greater than ' + upperLimit + '.');
            }
            // If the guess is too high let the user know.
            else if (guess > answer) {
                alert('Your guess is too high.');
            }
            // If the guess is too low let the user know.
            else if (guess < answer) {
                alert('Your guess is too low');
            }
            // If none of the other cases were true that means the answer must have
            // been guessed so let the user know and break out of the loop.
            else {
                alert('Great job, you got it!');
                break;
            }
        }
        // If the guess is not a number, let the user know.
        else {
            alert('You must enter a number as a guess.');
        }
        
        tries = tries - 1;
    }
    
    if (tries == 0) {
        alert('You ran out of tries.  The number was ' + answer + '.');
    }
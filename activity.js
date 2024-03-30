// Here is an activity, we have to take a prompt from the user. About their favourite movie . Till the guess of the user is wrong , we have to print " Try again !!! "

let favourite_BollyWood_Movie = "PK";

let attempts = 1;

let user_guess = prompt("Enter your guess ").toUpperCase();
while (user_guess != favourite_BollyWood_Movie) {
  console.log("Try Again");
  if (user_guess == "QUIT") {
    alert("You have quit the game");
  }
  //   attempts++;
}

console.log("You guessed the correct movie in ", attempts, " attempts");

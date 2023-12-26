// let changes = document.querySelector(".btn");

// let ChangeText = () => {
//   changes.innerHTML = "I have been clicked";
//   changes.style.width = "24rem";
//   changes.style.fontSize = "2rem";
// };

// function clickHua() {
//   let a = document.getElementsByClassName("box")[2];
//   //   a.style.innerHTML = "I Have Been Clicked";
//   a.style.backgroundColor = "red";
//   //   a.style.color = "black";
// }

// // A little bit tricky way of events handling through a function in our JavaScript

// // Here, we have to first, access an element using i'd attribute

// let access_using_Id = document.getElementById("click-karo");
// let naam = document.querySelector("#click-karo");
// access_using_Id.onclick = function () {
//   alert(`I'd click-karo has been called through a little bit tricky way`);
// };

// // Now we have to use Add Event Listener

// const addEvent = document.querySelector(".btn");

// // To call a function in another function is basically called as a callback function and in this below JavaScript code of Add Event Listener, we are just focusing and looking at this code

// addEvent.addEventListener("click", () => {});

let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", () => {
  btn.innerHTML = "Clicked!!!";
});

// Now Revise it in a quick way:
// There are total 04 ways of writing event handlers using JavaScript

// <============================== 1 ============================>
// First Way: (On event performing in JS , perform the required task inside your HTML file, which is not a better way of including your event function)
// for example: <div
//     onclick="alert('I am First Way of Including Handlers in JavaScript')"
//     class="box"
//   >
//     I am First Way of Including Handlers in JavaScript
//   </div>

// <============================== 2 ============================>
// Second Way: (In this second way we call a function in our HTML file and we create that specific function in our JS file)

function SecondWay() {
  alert(
    "I am the second way of handling event is JavaScript, we call a function in our HTML file and we create that specific function in our JS file like this"
  );
}

// <============================== 3 ============================>
// Third Way: (In this third way we take the refrence of our HTML file and then we perform functionality of different kind on this refrence in our JS file)

// Explanation:-
// First we have to get the access of our specific element in a variable and then perform specific events on it.

let Third_Way = document.getElementById("thirdWay");

// I have created an anonymus function here
Third_Way.onclick = function () {
  alert(
    "I am the third way of creating a function in JavaScript. I am also most common way of handling events in JavaScript Functions"
  );
};

// <============================== 4 ============================>
// Fourth Way: (In this Fourth way we use the technique of add event listener in our JS and then call the desired Event of our JavaScript )

// Explanation:-
// First we have to take the specific element in a variable and then perform specific events on it through AddEventHandlers().

// CallBack Function:-
// // To call a function in another function is basically called as a callback function and in this below JavaScript code of Add Event Listener, we are just focusing and looking at this code
FourthWay = document.getElementById("FourthWay");

FourthWay.addEventListener("click", () => {
  alert(
    "I have been clicked & I am the fourth way to add event listener in our JS !!!"
  );
});

FourthWay.addEventListener("click", () => {
  console.log(
    "I have been clicked & I am the fourth way to add event listener in our JS !!!"
  );
});

// ================================== NOTE ========================================
// It is very Important Concept to understand , If an interviewer asks you about the difference between third and fourth apporach of calling and handling your events in JavaScript . Then, you can say that our JavaScript's third approach will overwrite the above function of same third approach ( If we want to perform different tasks using the same approaches of event hanlding in JavaScript). In summary we can say that the disadvantage of our JavaScript's third hanlding event function is that, we can't always perform the different activities in a single run

// But , In the fourth and the most advanced way of handling JavaScript event functions (We can achieve the different functionality from our same function , by calling it in the single run) unless our 3rd Way of handling events where we can only achieve a single task after running our same JavaScript Function in a single run

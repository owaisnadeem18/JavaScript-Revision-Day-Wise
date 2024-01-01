// Event Bubbling:

// Event Bubbling performs operation from bottom to top

// Event Capturing:

// Event capturing performs operation from top to bottom. This is also called as trickling , top to bottom in JavaScript

// lets see this thing using the concepts of DOM e.t.c

// let parent = document.getElementById("parent-div");
// let child = document.getElementById("child-div");

// child.addEventListener("click", () => {
//   alert("I am a child Div");
//   //   To save our program, performing the bubbling propagation , we can write the following line of code.
//   event.stopPropagation();
// });

// parent.addEventListener(
//   "click",
//   () => {
//     alert("Hello , You clicked on the parent");
//   },
//   true
// );

// Important Interview Question: By default, the event called is event bubbling (from bottom to top) . I mean that at first, child will get executed , after it the above parents classes will get executed step by step . This is the event bubbling in JavaScript

// Now, You can clearly see that now whenever I click even at the child-div , then still I see the alert . It means that here I can say that event capturing is happening

// ================================================

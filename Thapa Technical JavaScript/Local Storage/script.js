// Local Storage in JavaScript.

localStorage.setItem("MyName", "Owais");
localStorage.getItem("MyName");
localStorage.removeItem("MyName");

// These three above lines of code are the total summary for local storage understanding

// NOTE: Keep this thing in your mind that your local storage only saves data in the form of strings, in order to save complex data structures . For Example your arrays or objects e.t.c then it is compulsory for you to convert it into JSON

// In JSON you have to remember only two things

// 1. JSON.parse() - It converts JSON string into object
// 2. JSON.stringify() - It converts JS String data into object or array

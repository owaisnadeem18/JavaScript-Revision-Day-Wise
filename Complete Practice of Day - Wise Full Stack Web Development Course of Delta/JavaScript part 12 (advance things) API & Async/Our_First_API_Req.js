// Our_First_API_Req

let API = "https://catfact.ninja/fact";

// by default Fetch API reurns a promise , so we have to use then and catch
fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log("data 01 = ", response.fact);
    return fetch(API);
  })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log("data 02 = ", response.fact);
  })
  .catch((err) => {
    console.log("Error -", err);
  });

// The above written code is asynchronous , we will not wait for it to get completed , infact JavaScript will keep on performing operations which are syncronous . For example:

// Both of these lines will print first before waiting for any other thing which is asyncronous:

console.log("I am Owais Nadeem");
console.log("I am Front End Web Developer");

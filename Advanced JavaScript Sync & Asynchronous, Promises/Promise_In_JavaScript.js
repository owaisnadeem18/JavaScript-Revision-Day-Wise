// Promise in JavaScript

// function getData() {
//   console.log("getting Data");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am inside the promise right now");
//       resolve(455);
//     }, 4000);
//   });
// }

// let Data = getData();
// console.log(Data);

// Let's discuss a little bit more about our Sync and async approach in JavaScript programming

async function getData() {
  console.table("Data has been fetched");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.table(
        "I am inside a promise now will run after delay of '5' seconds"
      );
      console.table("Hurray !!! Data a gya");
    }, 5000);
  });
}

async function main() {
  console.table("Loading Modules");
  console.table("Do Soemthing Else");
  console.table("Load Data");
  let data = await getData();
}

main();
// getData();

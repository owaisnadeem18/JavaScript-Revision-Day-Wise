// Higher Order functions:

// Takes one or more than one function as arguments . Ye aik higher order function kuch aisa function hota hay k ye function argument k tor pay leta hay aik or dusray function ko

let multiple_Greets = (function_liya, count) => {
  for (let i = 1; i <= count; i++) {
    function_liya();
  }
};

function salam() {
  console.log("Salam !!!");
}

multiple_Greets(salam, 5);

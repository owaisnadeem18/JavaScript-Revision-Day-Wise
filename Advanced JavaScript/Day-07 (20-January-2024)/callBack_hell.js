// This is the call back hell pyramid in JavaScript

setTimeout(function () {
  console.log("Operation 1 completed");

  setTimeout(function () {
    console.log("Operation 2 completed");

    setTimeout(function () {
      console.log("Operation 3 completed");

      setTimeout(function () {
        console.log("Operation 4 completed");

        setTimeout(function () {
          console.log("Operation 5 completed");

          setTimeout(function () {
            console.log("Operation 6 completed");

            // ... more nested operations
          }, 1000);
        }, 800);
      }, 600);
    }, 400);
  }, 200);
}, 100);

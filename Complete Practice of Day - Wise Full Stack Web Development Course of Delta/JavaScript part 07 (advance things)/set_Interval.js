// Stop Watch (mini project)

let sec = 0;
let min = 0;
let hour = 0;

setInterval(() => {
  sec += 1;

  if (sec == 59) {
    sec = 0;
    min++;
    if (min == 59) {
      min = 0;
      hour += 1;
    }
  }
  console.log(`${hour} hour ${min} min ${sec} sec`);
}, 1000);

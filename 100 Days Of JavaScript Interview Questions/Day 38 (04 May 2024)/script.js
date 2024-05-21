// Calculate the days between two dates (date_01) & (date_02) by using a function CalculateDays ()

function CalculateDays(date_01, date_02) {
  date_01 = new Date(date_01);
  date_02 = new Date(date_02);

  let diff = Math.abs(date_02 - date_01);
  return diff / (24 * 60 * 60 * 1000);
}

console.log(CalculateDays("2024-05-10", "2024-05-30"));

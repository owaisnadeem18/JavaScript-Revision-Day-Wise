// For Each Loop In JavaScript:
// Syntax:

array = ["Owais", "nadeem", "Ali", "Hassan", "Hamza"];

array.forEach(function (element, index, array) {
  console.log(
    "Array Element is : " +
      element +
      " || Index = " +
      index +
      " || Array = " +
      array
  ); // The advantage of ForEach loop is that , that we can access element inside our array and also we can access index of array plus [array]
}); // It modifies the same array , but does not create a new array
// Note : We can't use break function in our for each loop 

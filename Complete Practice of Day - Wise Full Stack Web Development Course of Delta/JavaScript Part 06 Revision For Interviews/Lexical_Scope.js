// Function k andar aik nya function bana lena or phir us k variables ko nested function may istemal kar paana possible ho jana , ye kehlaata hay lexical scope

function outerFunc() {
  let a = 4;
  let b = 10;
  function innerFunc() {
    let x = 6;
    console.log(a);
    console.log(b);
  }
  innerFunc();
  console.log(x); // ye nhi print ho sakay ga , because lexical scope baday say chotay key traf jaata hay ( means k , parent to child jata hay . Kabhi bhi child to parent nahi jaata )
}

console.log(innerFunc()); // ye bhi nhi chalay ga because lexical scope bahar nahi kaam karta hay

outerFunc();

let variable = document.querySelector(".para");

let changeContent = () => {
  variable.innerHTML = "Content has been changed";
  // Targeting an element using class attribute through DOM:
  let class_attribute = document.getElementsByClassName("para");
  console.log(class_attribute);
};
// Important MCQ's Question:

// ================================== 1 ==================================

// Here, this is a question related to Interview about DOM Query Selector (If there is a use of query selector from your end, then you can see that if query selector is targeting two classes having the same name as "para" for example . Then, query selector will just change the very first class having the content in class "para")

// ================================== 2 ==================================

// If you are using the document.querySelectorAll("class/id_name") then it will just show me that how many number of classes and which single I'd is present

// console.log(document.getElementById("#rdf")); //As this class is not present then it will return "null"

let paragraph = document.querySelector(".para");

console.log(paragraph.innerHTML);

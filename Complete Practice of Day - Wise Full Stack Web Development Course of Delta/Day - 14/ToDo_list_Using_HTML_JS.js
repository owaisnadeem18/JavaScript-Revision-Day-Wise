// First take a prompt to enter a new task

let tasks = [];

let request = prompt("Enter your request ").toLowerCase();

while (true) {
  if (request == "quit") {
    console.log("Your Todo App has been quitted");
    break;
  }

  if (request == "view") {
    console.log("------------------------------------");
    for (let i = 0; i < tasks.length; i++) {
      console.log(i, tasks[i]);
    }
    console.log("------------------------------------");
  } else if (request == "add") {
    request = prompt("Enter your request ").toLowerCase();
    tasks.push(request);
    console.log("task added ");
  } else if (request == "delete") {
    let idx = prompt("Enter the todos index you want to delete ");
    tasks.splice(idx, 1);
    console.log("Task has been deleted");
  } else {
    alert("Invalid Request ");
    break;
  }

  request = prompt("Enter your next request pls : ").toLowerCase();
}

let tasks_container = document.getElementById("tasks");

let input_field = document.getElementById("input_text");

get_input = () => {
  tasks_container.innerHTML += `
        <ul class = "ul" >
            <li> ${input_field.value} </li>
            <div className="icons">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </ul>
    `;
};

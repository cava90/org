import checkComplete from "./components/checkComplete.js";
import trashIcon from "./components/trashIcon.js";

( () =>{ 
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement('li');
        task.classList.add("card");
        input.value = '';

        //backticks
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);
        
        task.appendChild(taskContent);
        task.appendChild(trashIcon());
        list.appendChild(task);
    };

    // Arrow functions o funciones anonimas
    btn.addEventListener('click', createTask);

})();
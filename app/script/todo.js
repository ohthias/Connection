document.getElementById("add-task").addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("item");

  let checkboxContainer = document.createElement("label");
  checkboxContainer.classList.add("custom-checkbox");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkboxContainer.appendChild(checkbox);

  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Nova tarefa";

  let deleteIcon = document.createElement("span");
  deleteIcon.classList.add("material-symbols-outlined");
  deleteIcon.innerText = "delete";

  deleteIcon.addEventListener("click", function () {
    li.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      inputText.classList.add("completed");
      inputText.setAttribute("readonly", true);
    } else {
      inputText.classList.remove("completed");
      inputText.removeAttribute("readonly");
    }
  });

  li.appendChild(checkboxContainer);
  li.appendChild(inputText);
  li.appendChild(deleteIcon);
  document.getElementById("tarefa").appendChild(li);
});

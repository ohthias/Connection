// Referências dos elementos
const addTodoButton = document.getElementById('addTodoButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Função para adicionar nova tarefa
function adicionarTarefa() {
  const tarefaTexto = todoInput.value.trim();

  if (tarefaTexto === '') {
    return; // Não adiciona tarefa vazia
  }

  // Criando o item da lista
  let li = document.createElement('li');
  li.classList.add('item');

  // Criando o container da tarefa (box-task)
  let boxTask = document.createElement('div');
  boxTask.classList.add('box-task');

  // Criando o container do checkbox
  let checkboxContainer = document.createElement('label');
  checkboxContainer.classList.add('custom-checkbox');

  // Criando o checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Criando o input de texto da tarefa
  let inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.value = tarefaTexto;

  // Criando o ícone de lixeira
  let deleteIcon = document.createElement('span');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.classList.add('material-symbols-outlined');
  deleteIcon.innerText = 'delete';

  // Função para excluir a tarefa
  deleteIcon.addEventListener('click', function () {
    li.remove();
  });

  // Função para marcar a tarefa como concluída
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      inputText.classList.add('completed');
      inputText.setAttribute('readonly', true);
    } else {
      inputText.classList.remove('completed');
      inputText.removeAttribute('readonly');
    }
  });

  // Montando a estrutura do item
  checkboxContainer.appendChild(checkbox);
  boxTask.appendChild(checkboxContainer);
  boxTask.appendChild(inputText);
  boxTask.appendChild(deleteIcon);

  // Adicionando o box-task ao item da lista
  li.appendChild(boxTask);

  // Adicionando a tarefa à lista
  todoList.appendChild(li);

  // Limpando o campo de entrada
  todoInput.value = '';
}

// Adicionar tarefa ao clicar no botão
addTodoButton.addEventListener('click', adicionarTarefa);

// Adicionar tarefa ao pressionar a tecla Enter
todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});
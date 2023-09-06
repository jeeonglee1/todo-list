const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");

let minhaListaDeTarefas = [];

function adicionarNovaTarefa() {
  minhaListaDeTarefas.push(input.value);
}

function mostrarTarefas() {}

button.addEventListener("click", adicionarNovaTarefa);

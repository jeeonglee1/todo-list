const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const fullList = document.querySelector(".list-task");

let minhaListaDeTarefas = [];

function adicionarNovaTarefa() {
  minhaListaDeTarefas.push(input.value);

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeTarefas.forEach((tarefa) => {
    novaLi =
      novaLi +
      `
      <li class="task">
        <img src="./img/checked.png" alt="checked-na-tarefa" />
        <p>${tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-lixo" />
      </li>
      `;
  });

  fullList.innerHTML = novaLi;
}

button.addEventListener("click", adicionarNovaTarefa);

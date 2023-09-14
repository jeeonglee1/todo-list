const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

// Função de adicionar task
function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  });

  mostrarTarefas();
}

// Função de mostrar tarefas
function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, index) => {
    novaLi =
      novaLi +
      `
      <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="checked-na-tarefa" onclick="concluirTarefa(${index})"/>
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${index})"/>
      </li>
      `;
  });

  listaCompleta.innerHTML = novaLi;
}

// Função para concluir tarefa
function concluirTarefa(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;

  mostrarTarefas();
}

// Função para deletar a task + mostrar a lista atualizada
function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);
  console.log(`deletado item ${index}`);

  mostrarTarefas();
}

// Evento de adicionar no botão
button.addEventListener("click", adicionarNovaTarefa);

import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

const inputList = document.querySelector('[data-form-input]');
const buttonList = document.querySelector('[data-form-button]');
const list = document.querySelector('[data-list]');

(() => {
    const criarTarefa = (event) => {
        event.preventDefault();

        let tarefa = createLi();
        list.appendChild(tarefa);
        tarefa.classList.add('task');

        let conteudo = `<p class="content">${inputList.value}</p>`
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());

        inputList.value = '';
    };

    const createLi = () => {
        return document.createElement('li');
    }

    buttonList.addEventListener('click', criarTarefa);

})();
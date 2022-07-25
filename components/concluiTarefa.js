const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
};

const concluirTarefa = (event) => {
    let tarefaCompleta = event.target.parentElement;

    tarefaCompleta.classList.toggle('done');

};

export default BotaoConclui;
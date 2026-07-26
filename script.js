let Input = document.getElementById('input');
let Botao = document.getElementById('botao');
let Tarefas = document.getElementById('tarefas');
let Marcado = false;
Botao.addEventListener('click', function () {
    if (Input.value != '') {
        let tarefa = document.createElement('p');
        tarefa.innerText = Input.value;
        Tarefas.appendChild(tarefa);
        Input.value = '';
        tarefa.style.color = 'white'
        tarefa.style.fontFamily = 'monospace'
        tarefa.style.fontSize = '18px'
        tarefa.addEventListener('click', function () {
            if (Marcado == false){
                tarefa.style.textDecoration = 'line-through';
                Marcado = true;
            }
            else{
                tarefa.style.textDecoration = '';
                Marcado = false;
            }
            tarefa.addEventListener('dblclick',function(){
                Tarefas.removeChild(tarefa);
            });
        });
    }
});
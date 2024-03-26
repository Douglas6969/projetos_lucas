$(document).ready(function () {
    $("#adctarefa").click(function () {
        var novaTarefa = $("#adclista").val();
        if (novaTarefa !== "") {
            var novaLista = $('<ul class="listaTarefas"></ul>');
            var novaTarefaItem = $('<li class="task-container"><input type="checkbox"><span>' + novaTarefa + '</span></li>');
            var botoesAcoes = $('<nav class="task-buttons"></nav>');
            var botaoEditar = $('<button class="editar"><i class="fa fa-pencil"></i></button>');
            var botaoExcluir = $('<button class="excluir"><i class="fa fa-trash"></i></button>');

            botaoEditar.appendTo(botoesAcoes);
            botaoExcluir.appendTo(botoesAcoes);

            botoesAcoes.appendTo(novaTarefaItem);
            novaTarefaItem.appendTo(novaLista);

            $("#containerListas").append(novaLista);
            $("#adclista").val("");
        }
    });

    $(document).on("click", "input[type=checkbox]", function () {
        var tarefa = $(this).parent();
        if ($(this).prop("checked")) {
            tarefa.addClass("checked");
        } else {
            tarefa.removeClass("checked");
        }
    });

    $(document).on("click", ".editar", function () {
        var tarefa = $(this).parent().parent();
        var textoAtual = tarefa.find("span").text().trim();
        var novoTexto = prompt("Digite o novo texto da tarefa:", textoAtual);
        if (novoTexto !== null && novoTexto !== "") {
            tarefa.find("span").text(novoTexto);
        }
    });
    
    $(document).on("click", ".excluir", function () {
        $(this).parent().parent().remove();
    });
});
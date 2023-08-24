var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);
    
    var pacienteTr = montatr(paciente);

    var erros = validapaciente(paciente);

    if (erros.length > 0) {
        exibemensagenderro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemderro = document.querySelector("#erros-mensagem");
    mensagemderro.innerHTML ="";
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montatr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montatd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montatd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montatd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montatd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montatd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validapaciente(paciente) {
    var erros = [];

    if (!validapeso(paciente.peso)) erros.push("Peso Inválido");
    if (!validaaltura(paciente.altura)) erros.push("Altura Inválida");
    if(paciente.nome.length ==0) erros.push("Nome não pode ficar vazio");
    if(paciente.gordura.length ==0) erros.push("Gordura não pode ficar vazio");
    if(paciente.peso.length ==0) erros.push("Peso não pode ficar vazio");
    if(paciente.altura.length ==0) erros.push("Altura não pode ficar vazio");


    return erros;
}

function exibemensagenderro(erros) {
    var ul = document.querySelector("#erros-mensagem");
    ul.innerHTML="";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

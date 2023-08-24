var paciente = document.querySelectorAll (".paciente")
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validapeso(peso);
    var alturaEhValida = validaaltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.style.backgroundColor= "red";
        paciente.classList.add("cliente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("cliente-invalido");
       
    }

    if ( alturaEhValida && pesoEhValido) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;

     
  }
    
  function validapeso (peso){

    if(peso >=0 &&  peso <1000){

        return true;
    }else{
        return false;
    }


  }


  function validaaltura (altura){

      if (altura >=0 && altura <=3.00){
        return true;
      }
      else{
        return false;
      }






  }

    function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura * altura);
    
        return imc.toFixed(2);
    }
}


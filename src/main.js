// Conta para calcular valor da sua hora no projeto
//
// By: danielhe4rt

	

let objeto = {
	script() {
		var valorProjeto = document.getElementById('valorProjeto').value;
		var horasDiarias = document.getElementById('horasDiarias').value;
		var diasEfetivos = document.getElementById('diasEfetivos').value;
		var diasFerias = document.getElementById('diasFerias').value;

	if (valorProjeto.trim() === "" || 
		horasDiarias.trim() === "" || 
		diasEfetivos.trim() === "" || 
		diasFerias.trim() === "" ) {			
			alert("Você não preencheu uma das opções necessárias, por favor preencha todos os dados.");
		} else {
				valorProjeto = parseFloat(valorProjeto)
				diasEfetivos = parseFloat(diasEfetivos)
				horasDiarias = parseFloat(horasDiarias)
				diasFerias = parseFloat(diasFerias)

				let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ( ( diasFerias * diasEfetivos * horasDiarias));


				var resultado = valorHora.toFixed(2)

				document.getElementById('resultado').innerHTML = `R$ ${resultado}`;
			}
	}		
}
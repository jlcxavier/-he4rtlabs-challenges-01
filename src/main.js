// Conta para calcular valor da sua hora no projeto
//
// By: danielhe4rt



function calculo() {
	var valorProjeto = document.getElementById('valorProjeto').value;
	var horasDiarias = document.getElementById('horasDiarias').value;
	var diasEfetivos = document.getElementById('diasEfetivos').value;
	var diasFerias = document.getElementById('diasFerias').value;

	valorProjeto = parseFloat(valorProjeto)
	diasEfetivos = parseFloat(diasEfetivos)
	horasDiarias = parseFloat(horasDiarias)
	diasFerias = parseFloat(diasFerias)

	let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ( ( diasFerias * diasEfetivos * horasDiarias));

	return valorHora.toFixed(2);
}

function imprimir() {
	var resultado = calculo();

	document.getElementById('resultado').innerHTML = `R$ ${resultado}`;
}

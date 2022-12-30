function cript() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textoDecifrado = texto.replace(/e/igm,"enter");
	var textoDecifrado = textoDecifrado.replace(/o/igm,"ober");
	var textoDecifrado = textoDecifrado.replace(/i/igm,"imes");
	var textoDecifrado = textoDecifrado.replace(/a/igm,"ai");
	var textoDecifrado = textoDecifrado.replace(/u/igm,"ufat");

	document.getElementById("lupaimg").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textoDecifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function descript() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	var textoDecifrado = texto.replace(/enter/igm,"e");
	var textoDecifrado = textoDecifrado.replace(/ober/igm,"o");
	var textoDecifrado = textoDecifrado.replace(/imes/igm,"i");
	var textoDecifrado = textoDecifrado.replace(/ai/igm,"a");
	var textoDecifrado = textoDecifrado.replace(/u/igm,"ufat");

	document.getElementById("lupaimg").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = textoDecifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function copy() {
	var copiado = document.querySelector("#texto2");
	copiado.select();
	document.execCommand("copy");
	alert("texto copiado");
}
function cadenaDeCaracteres(palabra,letra){
	var palabra = document.getElementById('txtPalabra').value;
	var letra = document.getElementById('txtLetra').value;

	var resultados = VocalesConstantes(palabra);
	document.getElementById('txtVocales').value = resultados[0];
	document.getElementById('txtConsonantes').value = resultados[1];
	document.getElementById('txtPalabraRepetida').value = letraRepetida(palabra,letra);
	document.getElementById('txtInvertirPalabra').value = ivertirPalabra(palabra);
	
}

function VocalesConstantes(palabra){
	var resultados = [0,0];
	//var palabra = prompt("Ingresa una palabra: ");
	for (var i = 0; i < palabra.length; i++) {
		if(siEsVocal(palabra.charAt(i))){
			resultados[0]++;
		} else {
			resultados[1]++;
		}
	}
	return resultados;
}

function siEsVocal(caracter){
	var array = ["A","E","I","O","U"];
	for (var j = 0; j < array.length; j++){
		if(caracter.toUpperCase() == array[j]){
			return true;
		} 
	}

	return false;
}


function letraRepetida(palabra,letra){
	var numeroDeApariciones = 0;
	for (var i = 0; i < palabra.length; i++) {
		if (letra.toUpperCase() == palabra.charAt(i).toUpperCase()) {
			numeroDeApariciones ++;
		}
	}
	return numeroDeApariciones;
}

function ivertirPalabra (palabra) {
	var ivertirPalabra = "" ;
	for (var i = 0; i < palabra.length; i++) {
		if (i%2 == 0) {
			ivertirPalabra+= palabra.charAt(i).toUpperCase();
		}else {
			ivertirPalabra+= palabra.charAt(i);
		}
			
	}
	return ivertirPalabra;
}



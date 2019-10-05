function SistemasNumericos(){
	var numeroDecimal = document.getElementById('txt_decimal').value;

	document.getElementById('txt_binario').value = convertirDec_Bin(numeroDecimal);
	document.getElementById('txt_octal').value = convertirDec_Oct(numeroDecimal);
	document.getElementById('txt_hexadecimal').value = convertirDec_Hex(numeroDecimal);
}

function convertirDec_Bin(numero){
	return (parseFloat(numero)).toString(2);
}

function convertirDec_Oct(numero){
	return (parseFloat(numero)).toString(8);
}

function convertirDec_Hex(numero){
	return (parseFloat(numero)).toString(16);
}
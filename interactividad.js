var Menor3= function(){
	var numero1= parseInt(document.getElementById("numero1").value);
	var numero2= parseInt(document.getElementById("numero2").value);
	var numero3= parseInt(document.getElementById("numero3").value);
	lectura = document.getElementById("lectura");
	
if (numero1 == numero2 && numero1 == numero3) { 
	lectura.innerHTML = "Todos los números ingresados son iguales... ";} 
		else {
			if (numero1 <= numero2 && numero1 <= numero3){
				lectura.innerHTML = "El número " +numero1+ " es el menor";
			} 
			else if (numero2 <= numero3){
				lectura.innerHTML = "El número " +numero2+ " es el menor";
			}
			else if (numero3 <= numero2){
				lectura.innerHTML = "El número " +numero3+ " es el menor";
			}
			else{
				lectura.innerHTML ="por favor llena todas las casillas :)";
		}
}
}

var cmapul= function (){
		var centimetros= parseFloat(document.getElementById("cm").value);
		lectura = document.getElementById("apul");
		var conversion= (centimetros/2.54);
if (centimetros >= "") { 
lectura.innerHTML ="Al parecer " +centimetros+ " centímetros es igual a " +conversion.toFixed(3)+ " pulgadas";
}else {
	lectura.innerHTML = "Por favor llena la casilla para poder realizar el calculo...";
}
}


var mtsayard= function (){
		var metros= parseFloat(document.getElementById("mtrs").value);
		lectura = document.getElementById("ayar");
		var calcular= (metros*1)/0.9144;
if (metros >= "") { 
lectura.innerHTML ="Al parecer " +metros+ " metros es igual a " +calcular.toFixed(3)+ " yardas";
}else {
	lectura.innerHTML = "Por favor llena la casilla para poder realizar el calculo...";
}
}

function carga(){
  var nombre = prompt("nombre");
  alert(nombre);
}

function punto4(){
  let num1 = parseInt(prompt("Digite el número 1"));
  let num2 = parseInt(prompt("Digite el número 2"));
  
  alert("El resultado de:\n suma: " + (num1+num2) + "\n resta: " + (num1-num2) + 
    "\n multiplicación: " + (num1*num2) + "\n división: " + (num1/num2));
}

function punto5(){
  let num1 = parseInt(prompt("Digite el número 1"));
  let num2 = parseInt(prompt("Digite el número 2"));
  let opcion=prompt("Digite la opción \n 1-Suma \n 2-Resta \n 3-Multiplicación \n 4-División \n 5-Potencia \n6-Raíz");
  let operacion=0;
  switch (opcion){
      case 1: operacion= num1+num2;break;
      case 2: operacion= num1-num2;break;
      case 3: operacion= num1*num2;break;
      case 4: operacion= num1/num2;break;
      case 5: operacion= Math.pow(num1,num2);break;
      case 6: operacion= Math.sqrt(num1);break;
  }
  alert("El resultado de la operación es:" + operacion);
}

function punto6(){
  let fechaActual = new Date();
  let fecha = prompt("Ingrese su fecha de nacimiento (dd-mm-aaaa)");
  let fechaSeparada = fecha.split("-");

  let año = fechaActual.getFullYear() - fechaSeparada[2];
  let mes = (fechaActual.getMonth()+1) - fechaSeparada[1];
  let dia = fechaActual.getDate() - fechaSeparada[0];

  alert(fechaActual);
  alert(fechaActual.getDate() + " " + (fechaActual.getMonth()+1) + " " + fechaActual.getFullYear())
  alert(dia + " " + mes + " " + año);

  if(mes<0){
    año--;
    alert("menos");
  }else if(dia<0 && mes<=0){
    año--;
    alert("menos");
  }else{    
    alert("none");
  }

  alert("Tiene " + año + " años")
}

function myFunction() {
    alert("Hello! I am an alert box!");
  }
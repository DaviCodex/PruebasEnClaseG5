function cargarTexto(){
    var capa = document.getElementById("contenedor");
    var cajaTexto = document.getElementsByName("texto")[0];

    var texto = cajaTexto.value;
    var textoOriginal = capa.innerHTML;
    capa.innerHTML = textoOriginal + "<br>" + texto;
}
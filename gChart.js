function generarData(){
    let tablaDatos = new google.visualization.DataTable();
    tablaDatos.addColumn('string','comida');
    tablaDatos.addColumn('number','votos');

    tablaDatos.addRows([
        ['Pizza',10],
        ['Hamburguesa',16],
        ['Perro',30],
        ['SalchiPapa', 20]
    ]);
    return tablaDatos;
}

function dibujarGraficoTorta()
{
    let data = generarData();
    var options={'title':'votacion comida rapida',
        'width':400,
        'height':300};
    let grafico= new google.visualization.PieChart(document.getElementById("ContenedorGrafico"));
    let grafico2= new google.visualization.LineChart(document.getElementById("ContenedorGrafico2")); 
    let grafico3= new google.visualization.BarChart(document.getElementById("ContenedorGrafico3")); 
    grafico.draw(data,null);
    grafico2.draw(data,null);
    grafico3.draw(data,null);
}
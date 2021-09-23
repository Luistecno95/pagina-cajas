function mostrarDatos(){
    var datos = "";
    datos = datos + document.getElementById("cursas").value;
    for(var i=0; i<q1.length; i++){
        if(q1[i].checked){
            var carrera = q1[i].value;
        }
    }
    /*var ma= document.getElementsByName("p2");
    for(var i=0; i<ma.length; i++){
        if(ma[i].checked){
            var cocina = ma[i].value;
        }
    }
    var q2= document.getElementsByName("p3");
    for(var i=0; i<q2.length; i++){
        if(q2[i].checked){
            var diseño = q2[i].value;
        }
    }
    var q3= document.getElementsByName("p4");
    for(var i=0; i<q3.length; i++){
        if(q3[i].checked){
            var maneja = q3[i].value;
        }
    }
    var q4= document.getElementsByName("p5");
    for(var i=0; i<q4.length; i++){
        if(q4[i].checked){
            var suena = q4[i].value;
        }
    }*/
    datos = 'Que carrera cursas? R= '+datos;/*'<br/> Que carrera maneja cocina tradicional? R= '+cocina+
    '<br/> Que carrera maneja diseño digital? R= '+diseño+'<br/> Que carrera maneja robotica? R= '+maneja+
    '<br/> Que carrera suena mas facil? R= '+suena;*/
    document.getElementById("resultado").innerHTML = datos;
}
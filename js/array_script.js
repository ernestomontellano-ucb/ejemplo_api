document.addEventListener("DOMContentLoaded", function () {
    let estudiantes = [{
        "nombre": "Sebastian",
        "apellido": "Cuentas",
        "edad": 24
    },{
        "nombre": "Iver",
        "apellido": "Castañeda",
        "edad":21
    },{
        "nombre":"Angel",
        "apellido":"Calle",
        "edad":20
    },{
        "nombre":"Paola",
        "apellido":"Apaza",
        "edad":19
    },{
        "nombre":"Muriel",
        "apellido":"Viscarra",
        "edad":20
    }];
    const lista = document.querySelector("ul");
  

    /* 
     for(inicializacion; condicion; actualización){
     }
    */
    for (i = 0; i < estudiantes.length; i++) {
        let li = document.createElement("li");
        li.innerHTML=`${estudiantes[i].nombre} ${estudiantes[i].apellido} si asistió`;
        lista.appendChild(li);
    }


});
/*var persona=[{
    nombre:'Pedro',
    apellido:'Perez',
    carrera:'Tec. en ingenieria en computacion',
    edad:25,
    activo:true,
    materias:[{ nombre:'Matematicas',nota:6},{nombre:'Expresion oral y escrita',nota:5}],
    telefonos:['2222-2222','7777-7777']
},
{
nombre:'Maria',
apellido:'Perez',
carrera:'Tec. en aeronautica',
edad:26,
activo:true,
materias:[{ nombre:'Ingles',nota:6},{nombre:'Fisica',nota:5}],
telefonos:['2222-2222','7777-7777']
},
{
    nombre:'Lorena',
    apellido:'Perez',
    carrera:'Tec. en calidad',
    edad:26,
    activo:true,
    materias:[{ nombre:'Ingles',nota:6},{nombre:'Fisica',nota:5}],
    telefonos:['2222-2222','7777-7777'],
    estado_civil:'soltera'
    },
]*/

var persona=[];
window.onload= function(){

    if(localStorage.getItem('personas')){
        persona= JSON.parse(localStorage.getItem('personas'))
    }
    msj="";
    e="";
    contenido= document.getElementById('contenido');
    for(p=0;p<persona.length;p++){
        msj+='<h1>'+persona[p].nombre+" "+persona[p].apellido+"</h1>";
        msj+='<p>edad:'+persona[p].edad+'<br>'
        msj+='<em>MATERIAS<em><br>'
        for(i=0;i<persona[p].materias.length;i++){
           msj+='nombre:'+persona[p].materias[i].nombre+' nota:'+persona[p].materias[i].nota+'</p>';
        }
        msj+='<em>contactos<em><br>'
        for(i=0;i<persona[p].telefonos.length;i++){
           msj+='Tel'+(i+1)+':'+persona[p].telefonos[i]+'</p>';
        }
        if(persona[p].estado_civil==undefined){
            e='--'
        }else{
            e=persona[p].estado_civil;
        }
        msj+='estado civil:'+e;
    }
 
    document.getElementById('sesion').addEventListener('click',function(){
        alert('hola');
        sessionStorage.setItem('personas',JSON.stringify(persona));
        localStorage.setItem('personas',JSON.stringify(persona));

    },false)
    document.getElementById('delete').addEventListener('click',function(){
        localStorage.removeItem('personas');
    },false)
 
 contenido.innerHTML=msj;
}
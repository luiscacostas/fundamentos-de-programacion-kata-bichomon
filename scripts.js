//Selecciona titulo con id
const generacionUno = document.querySelector('#gen-1');
//Cambiamos el contenido del titulo
generacionUno.textContent = 'Generasion 1 Pokimon';

//Seleccionamos todos los div hijos de main
let generaciones = document.querySelectorAll('body > main > div');
//cambiar el color fondo de la primera generacion que es el segundo div
const generacionDos = generaciones[1];
//añadimos el atributo style y su fondo de color.
generacionDos.setAttribute('style', 'background:green')

//Imprimir por consola la URL de la pagina
console.log(document.URL);

//Imprimir por consola el dominio de la pagina
let dominio = window.location.hostname;
console.log(dominio);

//Imprimir los nodos de imagen
let imagenes = document.querySelectorAll('img');
imagenes.forEach((imagen)=> {
    console.log(imagen);
})

//Sustituir el src atributo de todas las imagenes
imagenes.forEach((e)=>{
    e.setAttribute('src',"https://media.giphy.com/media/2v170e71aanfi/giphy.gif" )
})

//Cambiar el fondo de los elementos con clases especificas



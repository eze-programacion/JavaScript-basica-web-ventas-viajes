// A esto se le llama desestructurar
import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtenemos los elementos del DOM (Document Object Model) para poder modifical la página de forma dinámica.
// Aca vamos a trabajar sobre todas las etiquetas "a", ya que solo tenemos las que estan en la lista de ciudades.
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Creamos un bucle para poder ir interactuando en cada opción, de esta manera en "enlace" va a ir guardando las "a".
enlaces.forEach(function (enlace) {
    // De esta manera se hace para agregar un evento al elemento seleccionado. En este caso es similar al onClick que usé anteriormente.
    /* Cuando enlace "escuche" un click en alguna de las 4 opciones, entra a un bucle para eliminar el efecto "active" de toda la lista <li>.
    Cuando "escucha" que hicimos click nos devuelve un objeto, que nos vamos a referir a el como THIS (este objeto) */
    enlace.addEventListener('click', function () {
        // Remover lo que vendria a ser el equivalente a "active" en HTML.
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar active al objeto que trajimos, en este caso usamos THIS para referirnos al enlace actual.
        this.classList.add('active')

        /* this.textContent nos devuelve el nombre de la ciudad que este guardado en este objeto (this) el cual va a ser un String.
        El String lo mandamos a la funcion obtenerContenido el cual nos va a devolver el Objeto que exportamos. Ej:
        Si this.textContext nos devuelve el string 'barcelona', la funcion nos va a devolver el OBJETO barcelona. */
        let contenido = obtenerContenido(this.textContent);

        // Mostrar contenido del DOM
        /* Guardamos el titulo, subtitulo y parrabo que tiene guardado el objeto y guardamos en las variables correspondiente ese contenido
        el cual, estas variables, van a reemplazar por el contenido del documento HTML. */
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
});

// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
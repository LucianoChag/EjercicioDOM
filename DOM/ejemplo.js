    // AGREGAR
 
// const titulo2 = document.createElement("h2");
// const textoTitulo2 = document.createTextNode(
//     "Nuevo titulo crado para el video"
// );

// const comentario = document.createComment("Comentario");

// const articulo = document.querySelector("article");
// const articulo2 = articulo.cloneNode(true);

// const section = document.getElementById("section");
// section.appendChild(articulo2); // añadir el articulo2
// section.insertAdjacentElement("beforebegin", articulo2);

// section.insertAdjacentText('beforeend', 'Aqui acaba la seccion');
// section.insertAdjacentHTML('beforeend', "<h3> Titulo inventado </h3>");

    // ELIMINAR

// section.remove();

    // MODIFICAR

// section.innerHTML = "<h2> Nuevo titulo</h2>";
// section.children[0].textContent = "Otro titulo";
// section.getAttribute("id");
// section.id;
// section.getAttribute("nombre");
// section.setAttribute("nombre", "aotrovalor");
// console.log(section.classList);
// section.className += "nuevaClasecss"
// section.classList.add('nuevaClase')
// section.classList.remove('nuevaClase')
// section.classList.toggle('nuevaClase') //Si existe la clase la quita, sino lo pone
// section.appendChild(articulo2) //agrega el articulo 2 que todavia no se ve reflejado en la pagina
// section.insertAdjacentElement('beforebegin', articulo2) 
// section.insertAdjacentElement('afterbegin', articulo2) 
// section.insertAdjacentElement('beforeend', articulo2) 
// section.insertAdjacentElement('afterend', articulo2) 

     //EVENTOS

     //Listeners

// function clickTitulo(){ //Funcion que cuando se clickea el titulo se muestra el mensaje. MALA PRACTICA
//     console.log("El usuario hizo click en el titulo");
// }

// const clickTitulo = (ev)=>{ 
//     console.log(ev);
// } //evento

// const titulo2 = document.getElementById("tituloForm");

//titulo2.onclick = clickTitulo; // se llama a la funcion y se muestra el mensaje con la accion sin tocar el html

// titulo2.addEventListener("click", clickTitulo); // BUENA PRACTICA

// titulo2.removeEventListener("click", clickTitulo) // se elimina

        //Eventos

// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log("El documento se ha largado") //Muestra el mensaje cuando se carga SOLO el html/se recarga la pagina
// })

//Submit y eliminar comportamiento nativo

const form = document.querySelector("#formulario");
const enviarFormulario = (event) => {
    event.preventDefault(); //Se controla el comportamiento el evento default del navegador
    const { name, email, password } = event.target; //L
    console.log(event); // para ver todo
    console.log(
        name.value,
        email.value,
        password.value) // ver cada uno de los valores que se indican
    if (name.value.length === 0) alert("el nombre no es valido");
}
form.addEventListener('submit', enviarFormulario);

      //  Event bubbling

// const form = document.querySelector("#formulario");
// const enviarFormulario = (event) =>{

//     }

form.addEventListener("submit", enviarFormulario);


const section = document.querySelector("#section");
const titulo2 = document.querySelector("#titulo2");

// titulo2.addEventListener("click", (event) =>  {
//     console.log(event.bubbles, event.cancelBubble);
//     event.stopPropagation();
//     console.log(event.bubbles, event.cancelBubble);
//     console.log("CLICK EN EL TITULO")

// }) //Al clickear en el titulo muestra que se clickeo la seccion y titulo
// section.addEventListener("click", () => {
//     console.log("click en la seccion")
// }) //Al clickear en la seccion muestra que se clickeo ahi.

// const section = document.querySelector("#seccion");

// section.addEventListener("click", (event) => {
//         console.log(event.target, event.currentTarget) //Veo el titulo especificamente clickeo
//     })   

section.addEventListener("click", (event) => {
    console.log("Click en seccion")
},
    {

    });   
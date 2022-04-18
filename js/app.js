
// const formulario = document.querySelector('#formulario')
// const cardsEstudiantes = document.querySelector('#cardsEstudiantes')
// const cardsProfesores = document.querySelector('#cardsProfesores')
// const templateEstudiante = document.querySelector("#templateEstudiantes").content;
// const templateProfesor = document.querySelector("#templateProfesores").content;
// const alert = document.querySelector(".alert")

// const estudiantes = [];
// const profesores = [];

// document.addEventListener(('click'), e => {
//     // console.log(e.target.dataset.nombre)
//     if(e.target.dataset.uid){
//         if(e.target.matches(".btn-success")){
//             estudiantes.map( item => {
//                 if (item.uid === e.target.dataset.uid){
//                     item.setEstado = true
//                 }
//                 return item
//             })
//         }
//         if(e.target.matches(".btn-danger")){
//             estudiantes.map( item => {
//                 if (item.uid === e.target.dataset.uid){
//                     item.setEstado = false;
//                 }
//                 return item
//             })
//         }
//         Persona.pintarPersonaUI(estudiantes, "Estudiante")
//     }
// })

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//         this.uid =`${Date.now()}`;
//     }

//     static pintarPersonaUI(personas, tipo){
//         if(tipo === "Estudiante"){
//             cardsEstudiantes.textContent = "";
//             const fragment = document.createDocumentFragment()

//             personas.forEach((item) => {
//                 fragment.appendChild(item.agregarNuevoEstudiante());
//             });

//             cardsEstudiantes.appendChild(fragment);
//         }
//         if(tipo === "Profesor"){
//             cardsProfesores.textContent = "";
//             const fragment = document.createDocumentFragment()
            
//             personas.forEach((item) => {
//                 fragment.appendChild(item.agregarNuevoProfesor())
//             });

//             cardsProfesores.appendChild(fragment)
//         }
//     }
// }

// class Estudiante extends Persona {
//     #estado = false
//     #estudiante = "Estudiante"

//     set setEstado(estado) {
//         this.#estado = estado
//     }

//     get getEstudiante(){
//         return this.#estudiante
//     }

//     agregarNuevoEstudiante(){
//         const clone = templateEstudiante.cloneNode(true)
//         clone.querySelector("h5 .text-primary").textContent = this.nombre
//         clone.querySelector("h6").textContent = this.getEstudiante;
//         clone.querySelector(".lead").textContent = this.edad;

//         if(this.#estado){
//             clone.querySelector('.badge').className = "badge bg-success"
//             clone.querySelector('.btn-success').disabled = true;
//             clone.querySelector('.btn-success').disabled = false;
//         } else{
//             clone.querySelector('.badge').className = "badge bg-danger"
//             clone.querySelector('.btn-danger').disabled = true;
//             clone.querySelector('.btn-danger').disabled = false;
//         }

//         clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Reprobado";

//         clone.querySelector('.btn-success').dataset.uid = this.uid
//         clone.querySelector('.btn-danger').dataset.uid = this.uid

//         return clone
//     }
// }

// class Profesor extends Persona {
//     #profesor = "Profesor"

//     agregarNuevoProfesor(){
//         const clone = templateProfesor.cloneNode(true)
//         clone.querySelector('h5').textContent = this.nombre;
//         clone.querySelector('h6').textContent = this.#profesor;
//         clone.querySelector('.lead').textContent = this.edad;
//         return clone;
//     }
// }

// formulario.addEventListener("submit", e => {

//     e.preventDefault()
//     alert.classList.add('d-none')

//     const datos = new FormData(formulario)
//     const [nombre, edad, opcion] = [...datos.values()];

//     if(!nombre.trim() || !edad.trim() || !opcion.trim() ){
//         console.log("hay un espeacio en blanco")
//         alert.classList.remove('d-none')
//         return
//     }
    
//     if (opcion === "Estudiante") {
//         const estudiante = new Estudiante(nombre, edad);
//         estudiantes.push(estudiante)
//         Persona.pintarPersonaUI(estudiantes, opcion)
//     }
//     if(opcion === "Profesor"){
    
//         const profesor = new Profesor(nombre, edad)
//         profesores.push(profesor)
//         Persona.pintarPersonaUI(profesores, opcion)
//     }

     
// })

import { sandia } from "./fruta.js";

console.log(sandia)

//***********************************************************
// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }

//     get getNombre(){
//         return this.nombre
//     }

//     set setNombre(nombre) {
//         this.nombre = nombre
//     }
//     saludar(){
//         return `${this.nombre} dice hola`
//     }

//     static probarSaludo(nombre){
//         return `${nombre} probar saludo`
//     }
// }

// class Estudiante extends Persona {
   
//     #notas = []

//     constructor(nombre, edad, notas){
//         super(nombre, edad);
//         this.notas = notas  || [];
//     }

//     set setNotas(nota){
//         this.notas.push(nota)
//     }

//     get getNotas(){
//         return this.notas
//     }

//     saludar(){
//         return `${this.nombre} desde estudiante`;
//     }
     
// }

// //sin instanciar, llamamos primero la clase, y despues el metodo
// // console.log(Persona.probarSaludo("lalo"))

// const juan = new Estudiante("juanito", 25);

// juan.setNotas = 7
// juan.setNotas = 5
// juan.setNotas = 1 

// console.log(juan.getNotas)
// // juan.setNombre = "pedrito"

// // console.log(juan.getNombre); 
// // console.log(juan.saludar());
// console.log();

// ************************************************************
// funcion constructora (vieja escuela, ahora se usa "class")
// function persona(nombre){
//     this.nombre = nombre

//     this.saludar = function (){
//         return `${this.nombre} dice hola`;
//     }
// }

// const juan = new persona('juanito');
// const pedro = new persona('pedrito')

// console.log(juan.saludar());
// console.log(pedro.saludar());

// persona.prototype.saludarIngles = function () {
//     return `${this.nombre} says hello!`
// }

// console.log(pedro.saludarIngles());


//*********************************
// const estudianteUno = {
//     nombre: 'gera',
//     uid: 'e-00123',
//     intereses: ["musica", "futbol"],
//     saludar(){
//         return `bienvenido ${this.uid}`
//     } 
// }

// console.log(estudianteUno.saludar())
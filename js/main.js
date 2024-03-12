

//Login
function login() {
  // Trae el valor del user + contraseña 
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Setea los valores en el localStorageStore 
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redirige a otra página (acá iría el perfil del user)
  window.location.href = 'other_page.html';

  // Prevent default?
  return false;
}


function crearHtml() {
  // Crea elementos HTML dinámicamente
  let nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = `¡Hola, este párrafo fue creado con JavaScript!`;

  let nuevoTitulo = document.createElement('h1');
  nuevoTitulo.textContent = 'Página creada con JavaScript';

  // Agrega los elementos al cuerpo del documento HTML
  document.body.appendChild(nuevoTitulo);
  document.body.appendChild(nuevoParrafo);
}

// Llama a la función cuando se carga la página

if (window.location.pathname === '/other_page.html') {
window.onload = function() {
  crearHtml();
}
}
;

// class Alumno { add event listener (se usa para asignar funciones a cada boton)
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.notas = [];
//         this.promedio = 0;
//         this.inasistencias = 0;
//         this.condicion = '';
//     }

//     agregarNota(nota) {
//         if (!isNaN(nota)) {
//             this.notas.push(parseFloat(nota));
//         } else {
//             console.log("Error: La nota ingresada no es válida. No se agregó la nota.");
//         }
//     }

//     calcularPromedio() {
//         let sum = this.notas.reduce((acc, nota) => acc + nota, 0);
//         this.promedio = sum / this.notas.length;
//     }

//     verificarCondicion() {
//         if (this.promedio >= 6 && this.inasistencias <= 15) {
//             this.condicion = 'Regular';
//         } else {
//             this.condicion = 'Libre';
//         }
//     }
// }

// let alumnos = [];

// function agregarAlumno() {
//     let nombreAlumno = prompt("Ingresar nombre del alumno:");
//     let alumno = new Alumno(nombreAlumno);

//     let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a ingresar: "));
//     for (let i = 0; i < cantidadNotas; i++) {
//         let nota = prompt(`Ingrese nota ${i + 1}: `);
//         alumno.agregarNota(nota);
//     }

//     alumno.calcularPromedio();

//     alumno.inasistencias = parseInt(prompt("Ingresar cantidad de faltas: "));
    
//     alumno.verificarCondicion();

//     if (alumno.condicion === 'Regular') {
//         console.log(alumno.nombre + " : Condición regular");
//     } else {
//         console.log(alumno.nombre + " : Condición libre");
//     }

//     if (alumno.condicion === 'Regular') {
//         console.log(alumno.nombre + " recibe una nota final de: " + alumno.promedio);
//     }
    
//     alumnos.push(alumno);
// }

// function eliminarAlumno() {
//     let nombreAlumno = prompt("Ingrese el nombre del alumno a eliminar: ");
//     let index = alumnos.findIndex(alumno => alumno.nombre === nombreAlumno);
//     if (index !== -1) {
//         alumnos.splice(index, 1);
//         console.log(`Alumno "${nombreAlumno}" eliminado.`);
//     } else {
//         console.log("Alumno no encontrado.");
//     }
// }


// function mostrarAlumnos() {
//     if (alumnos.length === 0) {
//         console.log("No se ha ingresado ningún alumno aún.");
//     } else {
//         let listaAlumnos = "LISTA DE ALUMNOS INGRESADOS:\n";
//         alumnos.forEach((alumno, index) => {
//             listaAlumnos += `${index + 1}. ${alumno.nombre}\n`;
//         });
//         console.log(listaAlumnos);
//     }
// }

// // Menú con switch
// let option;
// do {
//     option = parseInt(prompt(
//         "REGISTRO DE ALUMNOS\n" +
//         "1. Ingresar nombre de alumno, calcular nota y condición final\n" +
//         "2. Eliminar alumno\n" +
//         "3. Consultar lista de alumnos\n" +
//         "4. Salir\n" +
//         "Ingrese la opción deseada:"
//     ));

//     switch (option) {
//         case 1:
//             agregarAlumno();
//             break;
//         case 2:
//             eliminarAlumno();
//             break;
//         case 3:
//             mostrarAlumnos();
//             break;
//         default:
//             console.log("Opción no válida");
//             break;
//     }
// } while (option !== 4);
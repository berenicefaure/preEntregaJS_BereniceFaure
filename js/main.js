

//Login
function login() {
  // Trae el valor del user + contraseña 
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Setea los valores en el localStorageStore 
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redirige a otra página (acá iría el perfil del user)
  window.location.href = 'perfil.html';

  // Prevent default?
  return false;
}




//lista de alumnos 

document.getElementById('formularioAlumno').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtiene los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const curso = document.getElementById('curso').value;

  // Obtiene la lista actual de alumnos del almacenamiento local
  let listaAlumnos = localStorage.getItem('listaAlumnos');

  if (!listaAlumnos) {
    // Si no hay una lista de alumnos, crea una nueva lista vacía
    listaAlumnos = [];
  } else {
    // Si hay una lista de alumnos, convierte la cadena JSON en un array
    listaAlumnos = JSON.parse(listaAlumnos);
  }

  // Crea un objeto con los datos del alumno
  const alumno = { nombre, edad, curso };

  // Agrega el nuevo alumno a la lista
  listaAlumnos.push(alumno);

  // Guarda la lista actualizada de alumnos en el almacenamiento local
  localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));

  // Limpia los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('curso').value = '';

});


function mostrarAlumnos() {
  const listaAlumnos = document.getElementById('listaAlumnos'); // 
  listaAlumnos.innerHTML = '';

  // Obtiene la lista de alumnos del almacenamiento local
  const listaAlumnosJSON = localStorage.getItem('listaAlumnos');

  if (listaAlumnosJSON) {
    // Si hay una lista de alumnos, convierte la cadena JSON en un array
    const listaAlumnosArray = JSON.parse(listaAlumnosJSON); 

    // Itera sobre la lista de alumnos y muestra cada uno en la lista
    listaAlumnosArray.forEach(function(alumno) { 
      const li = document.createElement('li');
      li.textContent = `Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Curso: ${alumno.curso}`;
      listaAlumnos.appendChild(li); // 
    });
  }
}



// Actualizar un alumno
function actualizarAlumno(index, nombre, edad, curso) {
  let listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnos'));
  listaAlumnos[index] = { nombre, edad, curso };
  localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));
}

// Eliminar un alumno
function eliminarAlumno(index) {
  let listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnos'));
  listaAlumnos.splice(index, 1);
  localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));
}



// Función para mostrar la lista de alumnos con opciones de editar y eliminar
function mostrarAlumnosConOpciones() {
  const listaAlumnosContainer = document.getElementById('listaAlumnos');
  listaAlumnosContainer.innerHTML = '';

  const listaAlumnosJSON = localStorage.getItem('listaAlumnos');

  if (listaAlumnosJSON) {
    const listaAlumnos = JSON.parse(listaAlumnosJSON);

    listaAlumnos.forEach(function(alumno, index) {
      const li = document.createElement('li');
      li.textContent = `Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Curso: ${alumno.curso}`;

      // Botón de Editar
      const editarButton = crearBoton('Editar', function() {
        mostrarFormularioEditarAlumno(index);
      });

      // Botón de Eliminar
      const eliminarButton = crearBoton('Eliminar', function() {
        eliminarAlumno(index);
        mostrarAlumnosConOpciones(); // Vuelve a mostrar la lista actualizada
      });

      // Agregar botones a la lista de alumnos
      li.appendChild(editarButton);
      li.appendChild(eliminarButton);

      listaAlumnosContainer.appendChild(li);
    });
  }
}

// Función para crear un botón con un texto y una función de clic
function crearBoton(texto, funcionClic) {
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.addEventListener('click', funcionClic);
  return boton;
}

// Función para mostrar formulario para editar un alumno
function mostrarFormularioEditarAlumno(index) {
  const listaAlumnosContainer = document.getElementById('listaAlumnos');
  listaAlumnosContainer.innerHTML = '';

  const listaAlumnosJSON = localStorage.getItem('listaAlumnos');

  if (listaAlumnosJSON) {
    const listaAlumnos = JSON.parse(listaAlumnosJSON);
    const alumno = listaAlumnos[index];

    const form = document.createElement('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe

      // Obtiene los nuevos datos del alumno
      const nuevoNombre = form.querySelector('.nombre').value;
      const nuevaEdad = form.querySelector('.edad').value;
      const nuevoCurso = form.querySelector('.curso').value;

      // Actualiza los datos del alumno
      listaAlumnos[index] = { nombre: nuevoNombre, edad: nuevaEdad, curso: nuevoCurso };
      localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));

      mostrarAlumnosConOpciones(); // Vuelve a mostrar la lista de alumnos con opciones
    });

    // Campos editables para el formulario
    ['nombre', 'edad', 'curso'].forEach(function(prop) {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('class', prop);
      input.setAttribute('value', alumno[prop]);
      form.appendChild(input);
    });

    // Botón de guardar cambios
    const guardarButton = document.createElement('button');
    guardarButton.textContent = 'Guardar';
    form.appendChild(guardarButton);

    listaAlumnosContainer.appendChild(form);
  }
}

// Mostrar alumnos con opciones al cargar la página
mostrarAlumnosConOpciones();








//class Cursos

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
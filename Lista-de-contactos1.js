// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let listaContactos = [
  "Alejandra Lopez",
  "Maria Muñoz",
  "Roberto Lopez",
  "Marcela Muñoz"
];
// Crea una función para añadir un nuevo contacto a una lista

function agregarContacto(nombreApellido) {
  listaContactos.push(nombreApellido);
}
// Crea una función para borrar un contacto existente de la lista

function borrarContacto(nombreApellido) {
  const indice = listaContactos.indexOf(nombreApellido);
  if (indice !== -1) { //Esto verifica si se encontró el nombreApellido en la lista. Si el índice es diferente de -1, significa que se encontró el contacto en la lista.
    listaContactos.splice(indice, 1);
  }
}

// Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaContactos.forEach(contacto => {
    console.log(contacto);
  });
}

// Agregar un nuevo contacto
agregarContacto("Ana Martinez");

// Imprimir la lista de contactos
imprimirContactos();

// Borrar un contacto
// borrarContacto("Maria Lopez");

// Imprimir la lista de contactos actualizada
// imprimirContactos();
// Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️
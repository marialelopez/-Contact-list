
// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let listaContactos = ["AlejandraLopez", "MarcelaMuñoz", "RobertoLopez"];

// // Crea una función para añadir un nuevo contacto a una lista
function agregarContacto (nuevoContacto){
  listaContactos.push(nuevoContacto)
  return listaContactos
}
// agregarContacto("LuisBacca");
// agregarContacto("SofiaMuñoz");

// console.log(listaContactos);

// // Crea una función para borrar un contacto existente de la lista
function borrarContacto(contactoABorrar){
  let nuevaLista = listaContactos.filter((contacto) => contacto !==contactoABorrar)
  listaContactos = nuevaLista
}

// borrarContacto ("AlejandraLopez")

// console.log(listaContactos);

// // Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos (){
  console.log(listaContactos);
}

// agregarContacto("LuisBacca");
agregarContacto("LuisBacca");
agregarContacto("SofiaMuñoz");
borrarContacto("SofiaMuñoz");
imprimirContactos()
// Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️

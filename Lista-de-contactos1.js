
// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listaContactos = [{
  id :1,
  nombre: "Alejandra",
  apellido: "Lopez",
  telefono: "3168067141",
  ubicaciones: {
    ciudad: "Pasto",
    direccion:"mz c casa 10",}
}
]

// // Crea una función para añadir un nuevo contacto a una lista
function agregarContacto (nuevoContacto){
  listaContactos.push(nuevoContacto)
}
// agregarContacto("LuisBacca");
// agregarContacto("SofiaMuñoz");

// console.log(listaContactos);

// // // Crea una función para borrar un contacto existente de la lista
function borrarContacto(contactoABorrar){
  let nuevaLista = listaContactos.filter(
  (contacto) => contacto.id !==contactoABorrar)
  listaContactos = nuevaLista
}

// // borrarContacto ("AlejandraLopez")

// // console.log(listaContactos);

// // // Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos (){
  console.log(listaContactos);
}

let nuevoContacto= {
  id :2,
  nombre: "Maria",
  apellido: "Muñoz",
  telefono: "31226777787",
  ubicaciones: {
    ciudad: "Ipiales",
    direccion:"mz c casa 7",}
}


// agregarContacto(nuevoContacto);
borrarContacto(2);
imprimirContactos()
// // Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️

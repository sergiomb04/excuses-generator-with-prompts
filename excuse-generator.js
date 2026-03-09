// Generador de Excusas - Un generador de excusas al azar para procrastinadores

// Array de posibles sujetos que pueden iniciar una excusa
const who = [
  "Mi perro",
  "Mi gato",
  "Mi jefe",
  "Mi amigo"
];

// Array de acciones en pasado que pueden ser parte de una excusa
const action = [
  "comió",
  "destruyó",
  "rompió",
  "robó",
  "perdió"
];

// Array de objetos o situaciones relacionadas con la excusa
const what = [
  "mi tarea",
  "mis llaves del auto",
  "mi teléfono",
  "mi laptop",
  "mi documento importante"
];

// Array de referencias de tiempo
const when = [
  "hoy",
  "ayer",
  "esta mañana",
  "anoche",
  "la semana pasada"
];

// Selección aleatoria de cada array
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Construir la excusa concatenando todos los valores aleatorios
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

// Imprimir la excusa final en la consola
console.log(excuse);

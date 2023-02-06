//_____________________________________Strings
const nombre = 'Darío';
const apellido = 'Pérez';

const estudiante = nombre + ' ' + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const estudiantelength = estudiante.length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.slice(-1);
const sinEspacios = estudiante.trim();

if (estudiante.includes(nombre)) {
  console.log(`La constante "estudiante" contiene la constante "nombre"`);
}

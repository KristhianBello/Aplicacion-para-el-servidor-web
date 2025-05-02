// 1. Definición de Variables
let animalNombre: string = "Firulais";
let animalEdad: number = 3;
let estaDisponible: boolean = true;

// 2. Definición de Objetos Literales
const animal = {
  id: 1,
  nombre: "Firulais",
  especie: "Perro",
  raza: "Labrador",
  edad: 3,
  estado: "Disponible"
};

const adoptante = {
  id: 101,
  nombre: "María Gómez",
  direccion: "Av. Siempre Viva 123",
  telefono: "0991234567",
  correo: "maria@gmail.com",
  fechaNacimiento: "1990-06-15"
};

// 3. Arreglos y Arreglos de Objetos
const animales = [
  { id: 1, nombre: "Firulais", especie: "Perro", raza: "Labrador", edad: 3, estado: "Disponible" },
  { id: 2, nombre: "Mishi", especie: "Gato", raza: "Persa", edad: 2, estado: "Adoptado" },
  { id: 3, nombre: "Luna", especie: "Perro", raza: "Pug", edad: 1, estado: "Disponible" }
];

// 4. Interfaces
interface Animal {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  estado: string;
}

interface Adoptante {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  fechaNacimiento: string;
}

interface Adopcion {
  id: number;
  animalId: number;
  adoptanteId: number;
  fecha: string;
  observaciones?: string;
  responsable: string;
}

// 5. Funciones para manipular entidades
function crearAnimal(animal: Animal): void {
  animales.push(animal);
  console.log("Animal agregado:", animal);
}

function mostrarAnimales(): void {
  console.log("Lista de animales:");
  animales.forEach(a => {
    console.log(`- ${a.nombre} (${a.especie}, ${a.estado})`);
  });
}

// 6. Operadores Spread y Rest
const nuevosAnimales: Animal[] = [
  { id: 4, nombre: "Toby", especie: "Perro", raza: "Boxer", edad: 4, estado: "Disponible" }
];

const todosLosAnimales = [...animales, ...nuevosAnimales]; // Spread

function registrarAdoptantes(...personas: Adoptante[]): void { // Rest
  personas.forEach(p => {
    console.log("Nuevo adoptante registrado:", p.nombre);
  });
}

// 7. Callback
function procesarAnimales(animales: Animal[], callback: (a: Animal) => void): void {
  for (const animal of animales) {
    callback(animal);
  }
}

// 8. Promises
function obtenerAdopciones(): Promise<Adopcion[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          animalId: 2,
          adoptanteId: 101,
          fecha: "2025-05-01",
          responsable: "Empleado1"
        }
      ]);
    }, 2000); // Simula 2 segundos de espera
  });
}

// 9. Async/Await
async function mostrarAdopciones(): Promise<void> {
  console.log("Cargando adopciones...");
  const adopciones = await obtenerAdopciones();
  console.log("Adopciones encontradas:", adopciones);
}

// Ejecución de algunas funciones para mostrar resultados
crearAnimal({ id: 5, nombre: "Rocky", especie: "Perro", raza: "Pastor Alemán", edad: 5, estado: "Disponible" });
mostrarAnimales();

registrarAdoptantes(adoptante);

procesarAnimales(animales, (a) => {
  console.log(`Procesado: ${a.nombre}`);
});

mostrarAdopciones();

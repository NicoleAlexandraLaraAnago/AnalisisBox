const CoachDirector = require('./coachDirector');
const BoxerBuilder = require('./boxerBuilder');

class CRUDBoxer {
  // Constructor inicializa un array vacío para almacenar boxeadores
  constructor() {
    this.boxers = [];
  }

  //manejamos las owperaciones CRUD de los boxeadores
  
  // Método para crear un nuevo boxeador
  createBoxer(type, name, objective) {
    const builder = new BoxerBuilder();        // Crea una instancia de BoxerBuilder
    const director = new CoachDirector(builder); // Crea una instancia de CoachDirector con el builder
    const boxer = director.constructBoxer(type, name, objective); // Usa el director para construir el boxeador
    this.boxers.push(boxer);                  // Agrega el boxeador al array de boxeadores
  }

  // Método para obtener todos los boxeadores
  getBoxers() {
    return this.boxers;
  }

  // Método para obtener todos los boxeadores (mismo método que getBoxers)
  getAllBoxers() {
    return this.getBoxers();
  }

  // Método para eliminar un boxeador por nombre
  deleteBoxer(name) {
    this.boxers = this.boxers.filter(boxer => boxer.name !== name); // Filtra el array para excluir el boxeador con el nombre dado
  }
}

module.exports = CRUDBoxer;

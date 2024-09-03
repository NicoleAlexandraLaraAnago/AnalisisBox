const Boxer = require('./boxer');

class BoxerBuilder {
  // Constructor inicializa un objeto vacío de boxeador
  constructor() {
    this.type = '';
    this.name = '';
    this.objective = '';
  }

  // Método para establecer el tipo de boxeador
  setType(type) {
    this.type = type;
    return this; // Retorna this para encadenar métodos
  }

  // Método para establecer el nombre del boxeador
  setName(name) {
    this.name = name;
    return this; 
  }

  // Método para establecer el objetivo del boxeador
  setObjective(objective) {
    this.objective = objective;
    return this; 
  }

  // Método para construir para crear la instancia de Boxer
  build() {
    return new Boxer(this.type, this.name, this.objective);
  }
}

module.exports = BoxerBuilder;

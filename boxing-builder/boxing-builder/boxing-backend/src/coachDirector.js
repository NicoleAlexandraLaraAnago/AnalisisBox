class CoachDirector {
  //El constructor recibe un builder de boxeador usando BoxerBuilder
  constructor(builder) {
    this.builder = builder;
  }

  //Método que recibe los parámetros para construir un boxeador
  constructBoxer(type, name, objective) {
    this.builder.setType(type);  //Establece el tipo
    this.builder.setName(name);  // Establece el nombre
    this.builder.setObjective(objective); //Establece el objetivo
    return this.builder.build();  //Devuelve el boxeador construido
  }
}

module.exports = CoachDirector;

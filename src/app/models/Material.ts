export class Material {
  id ?: String;
  name ?: String;
  active ?: Boolean;
  code ?: String;
  constructor(id : String, name : String, active : Boolean, code : String) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.code = code;
  }
}


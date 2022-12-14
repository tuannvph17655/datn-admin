export class Color {
  id ?: String;
  name ?: String;
  hex ?:String;
  active ?: Boolean;
  constructor(id : String, name : String, hex : String, active : Boolean) {
    this.id = id;
    this.name = name;
    this.hex = hex;
    this.active = active
  }
}

export class ColorRes {
  id ?: String;
  name ?: String;
  hex ?:String;

  constructor(id : String, name : String, hex : String) {
    this.id = id;
    this.name = name;
    this.hex = hex;
  }
}

export class ColorResponse {
  colorId ?: String ;
  colorName ?: String ;

  constructor(colorId: String, colorName: String) {
    this.colorId = colorId;
    this.colorName = colorName;
  }
}

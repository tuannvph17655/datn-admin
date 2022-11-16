export class Size {
  id ?: String;
  name ?: String;
  code ?: String;
  status ?: Boolean

  constructor(id : String, name : String , code : String, status : Boolean) {
      this.id = id;
      this.name = name;
      this.code = code;
      this.status = status;
    }
}

export class SizeResponse {
  sizeId ?: String;
  sizeName ?: String;

  constructor(sizeId: String, sizeName: String) {
    this.sizeId = sizeId;
    this.sizeName = sizeName;
  }
}



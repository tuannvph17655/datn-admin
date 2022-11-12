export class Product {
  public id ?: String;
  public name ?: String;
  public des ?: String;
  public minPrice ?: String;
  public maxPrice ?: String;
  public active ?: Boolean;
  public createdDate ?: String;
  public qty ?: Number;
  public materialName ?: String;
  public categoryName ?: String;
  public typeName ?: String;
  public soldNumber ?: Number;
  public sizes ?: String[];
  public colors ?: String[];

  constructor(id: String, name: String, des: String, minPrice: String, maxPrice: String, active: Boolean, createdDate: String, qty: Number, materialName: String, categoryName: String, typeName: String, soldNumber: Number, sizes: String[], colors: String[]) {
    this.id = id;
    this.name = name;
    this.des = des;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.active = active;
    this.createdDate = createdDate;
    this.qty = qty;
    this.materialName = materialName;
    this.categoryName = categoryName;
    this.typeName = typeName;
    this.soldNumber = soldNumber;
    this.sizes = sizes;
    this.colors = colors;
  }
}

export class ProductOption {
  id ?: String;

  productId ?: String;

  colorId ?: String;

  colorName ?: String;

  qty ?: Number;

  price ?: Number;

  image ?: String;

  active ?: String;

  sizeId ?: String;
  sizeName ?: String;

  constructor(id: String, productId: String, colorId: String, qty: Number, price: Number, image: String, active: String, sizeId: String, colorName : String, sizeName : String) {
    this.id = id;
    this.productId = productId;
    this.colorId = colorId;
    this.qty = qty;
    this.price = price;
    this.image = image;
    this.active = active;
    this.sizeId = sizeId;
    this.sizeName = sizeName;
    this.colorName = colorName;
  }
}

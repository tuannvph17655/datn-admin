export class FilterOrderRequest {
  startDate : String ;
  endDate : String ;
  totalPrice : String;
  payed  : Boolean;
  statusValue  : String;
  textSearch  : String

  constructor(
  startDate : String,
  endDate : String,
  totalPrice : String,
  payed  : Boolean,
  statusValue  : String,
  textSearch  : String) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
    this.payed = payed;
    this.statusValue = statusValue;
    this.textSearch = textSearch
  }
}

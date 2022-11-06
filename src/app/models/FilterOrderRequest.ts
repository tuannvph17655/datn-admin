export class FilterOrderRequest {
  startDate : String ;
  endDate : String ;
  totalPrice : String;
  payed  : String;
  statusValue  : String;
  textSearch  : String;
  page : String;
  size : String;

  constructor(
  startDate : String,
  endDate : String,
  totalPrice : String,
  payed  : String,
  statusValue  : String,
  textSearch  : String,
  page : String,
  size : String
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
    this.payed = payed;
    this.statusValue = statusValue;
    this.textSearch = textSearch;
    this.page = page;
    this.size = size;
  }
}

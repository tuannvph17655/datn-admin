export class CancelOrder {
  public orderId ?: string;
  public  note ?: string;

  constructor(
    orderId ?:string,
    note ?: string
  ) {
    this.orderId = orderId;
    this.note = note;
  }
}

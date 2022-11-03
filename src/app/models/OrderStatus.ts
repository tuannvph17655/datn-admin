
export class  OrderStatus {
    id ?: string;
    status ?:string;
    note ?: string;
    constructor(id ?: string,
                status ?:string,
                note ?: string) {
      this.id = id;
      this.status = status;
      this.note = note;
    }
}

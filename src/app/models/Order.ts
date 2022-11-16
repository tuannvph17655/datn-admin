import {CustomerInfoRes} from "./CustomerInfoRes";

export class Order {
  isActive ?: boolean;
  orderId ?: string ;
  orderCode ?: string ;
  status ?: string ;
  createDate ?: Date ;
  address ?: string ;
  totalPrice ?: string ;
  payed ?: boolean ;
  statusValue ?: string ;
  customerInfoRes ?: CustomerInfoRes;

}


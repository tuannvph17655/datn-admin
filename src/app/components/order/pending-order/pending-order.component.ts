import { Component, OnInit } from '@angular/core';
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {OrderStatus} from "../../../models/OrderStatus";

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {
  public orders : Order[] = [];
  reason : string = '';
  // orderId : string = '';
  startDate ?: Date = new Date();
  endDate ?: Date = new Date();
  totalPrice ?: String = '';
  payed ? : Boolean = false;
  statusValue ? : String = 'PENDING';
  textSearch ? : String = '';
  note ?: string = '';
  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getListOrder();
  }

  getListOrder(){
    var filter = new FilterOrderRequest(this.startDate,this.endDate,this.totalPrice,this.payed, this.statusValue, this.textSearch);
    console.log("filter " +filter.textSearch);
    this.orderService.getListOrder(filter).subscribe({
      next: (res: any) => {
        this.orders = res.data.orderRes;
        console.log("orders" + this.orders);
        console.log(this.orders)
      },error: (err) => {
        console.log('error: ',err);
      }
    })
  }

  changOrderStatusToAccept(id ?: string) {
    const orderStatus = new OrderStatus(id, )
  }


}

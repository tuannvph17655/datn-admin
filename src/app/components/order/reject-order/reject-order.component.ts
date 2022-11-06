import { Component, OnInit } from '@angular/core';
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-reject-order',
  templateUrl: './reject-order.component.html',
  styleUrls: ['./reject-order.component.css']
})
export class RejectOrderComponent implements OnInit {
  public orders : Order[] = [];
  reason : string = '';
  // orderId : string = '';
  startDate ?: Date = new Date();
  endDate ?: Date = new Date();
  totalPrice ?: String = '';
  payed ? : Boolean = false;
  statusValue ? : String = 'REJECT';
  textSearch ? : String = '';
  note ?: string = '';
  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
  }
  // getListOrder(){
  //   var filter = new FilterOrderRequest(this.startDate,this.endDate,this.totalPrice,this.payed, this.statusValue, this.textSearch);
  //   console.log("filter " +filter.textSearch);
  //   this.orderService.getListOrder(filter).subscribe({
  //     next: (res: any) => {
  //       this.orders = res.data.orderRes;
  //       console.log("orders" + this.orders);
  //       console.log(this.orders)
  //     },error: (err) => {
  //       console.log('error: ',err);
  //     }
  //   })
  // }
}

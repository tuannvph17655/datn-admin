import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {Order} from "../../../models/Order";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.component.html',
  styleUrls: ['./accept-order.component.css']
})
export class AcceptOrderComponent implements OnInit {
  public orders : Order[] = [];
  reason : string = '';
  // orderId : string = '';
  startDate ?: Date = new Date();
  endDate ?: Date = new Date();
  totalPrice ?: String = '';
  payed ? : Boolean = false;
  statusValue ? : String = 'ACCEPT';
  textSearch ? : String = ''
  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
    // this.getListOrder();
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

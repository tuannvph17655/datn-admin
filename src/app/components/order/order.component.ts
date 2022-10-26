import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/Order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders : Order[] = [];
  reason : string = '';
  // orderId : string = '';
  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getListOrder();
  }

  getListOrder(){
    this.orderService.getListOrder().subscribe({
      next: (res: any) => {
        this.orders = res.data.orderRes;
        console.log(this.orders)
      },error: (err) => {
        console.log('error: ',err);
      }
    })
  }


}

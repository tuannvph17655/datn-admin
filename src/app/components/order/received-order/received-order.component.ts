import { Component, OnInit } from '@angular/core';
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-received-order',
  templateUrl: './received-order.component.html',
  styleUrls: ['./received-order.component.css']
})
export class ReceivedOrderComponent implements OnInit {
  public orders: Order[] = [];
  public totalPrice = '';
  public payed = '';
  public statusValue = 'RECEIVED';

  filterOrderForm = new FormGroup({
    textSearch: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    page : new FormControl('0'),
    size : new FormControl('100')
  });

  changOrderStatusToAcceptForm = new FormGroup({
    id: new FormControl(''),
    note: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private orderService : OrderService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListOrder();
  }

  getListOrder(){
    var filter = new FilterOrderRequest(this.filterOrderForm.value.startDate || ''
      , this.filterOrderForm.value.endDate || ''
      , this.totalPrice
      , this.payed
      , this.statusValue,
      this.filterOrderForm.value.textSearch || ''
      ,this.filterOrderForm.value.page || '0',this.filterOrderForm.value.size || '100');
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

}

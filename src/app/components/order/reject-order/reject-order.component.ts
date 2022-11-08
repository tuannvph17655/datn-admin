import { Component, OnInit } from '@angular/core';
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reject-order',
  templateUrl: './reject-order.component.html',
  styleUrls: ['./reject-order.component.css']
})
export class RejectOrderComponent implements OnInit {
  public orders: Order[] = [];
  public totalPrice  = '';
  public payed = '';
  public statusValue  = 'REJECT';
  filterOrderForm = new FormGroup({
    textSearch: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    page : new FormControl('0'),
    size : new FormControl('100')
  });

  changOrderStatusForm = new FormGroup({
    id: new FormControl(''),
    note: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private orderService : OrderService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.getListOrder();
  }
  getListOrder() {
    var filter = new FilterOrderRequest(this.filterOrderForm.value.startDate || '', this.filterOrderForm.value.endDate || '', this.totalPrice, this.payed, this.statusValue, this.filterOrderForm.value.textSearch || '',this.filterOrderForm.value.page || '',this.filterOrderForm.value.size || '');
    console.log("filter " + filter.textSearch);
    this.orderService.getListOrder(filter).subscribe({
      next: (res: any) => {
        this.orders = res.data.orderRes;
        console.log("orders" + this.orders);
        console.log(this.orders)
      }, error: (err) => {
        console.log('error: ', err);
      }
    })
  }
}

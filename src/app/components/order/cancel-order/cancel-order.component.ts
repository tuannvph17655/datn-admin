import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {Order} from "../../../models/Order";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
  public orders: Order[] = [];
  public totalPrice  = '';
  public payed = '';
  public statusValue  = 'CANCEL';

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
    private orderService: OrderService,
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
  fillDataToFormControl(data ?: string) {
    this.changOrderStatusForm.patchValue({
      id: data,
      note: '',
      status: 'CANCEL'
    });
  }

  hideModal() {
  }

}

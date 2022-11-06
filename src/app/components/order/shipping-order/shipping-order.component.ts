import { Component, OnInit } from '@angular/core';
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {OrderStatus} from "../../../models/OrderStatus";
import {CancelOrder} from "../../../models/CancelOrder";

@Component({
  selector: 'app-shipping-order',
  templateUrl: './shipping-order.component.html',
  styleUrls: ['./shipping-order.component.css']
})
export class ShippingOrderComponent implements OnInit {
  public orders : Order[] = [];
  public totalPrice  = '';
  public payed = '';
  public statusValue = 'SHIPPING';

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
    status: new FormControl('')
  });


  constructor(private orderService : OrderService,
              private toastr : ToastrService) { }

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
      status: 'RECEIVED'
    });
  }

  changOrderStatusToRecevied() {
    const orderStatus = new OrderStatus(this.changOrderStatusForm.value.id || '', 'RECEIVED', this.changOrderStatusForm.value.note || '');
    console.log('id ', orderStatus.id);
    this.orderService.changeStatus(orderStatus).subscribe({
      next: (res: any) => {
        this.toastr.success('Chuyển đổi trạng thái đơn hàng thành công !');
        this.hideModal();
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Chuyển đổi trạng thái đơn hàng thất bại !');
      }
    })
  }


  rejectOrder() {
    const cancelOrder = new CancelOrder(this.changOrderStatusForm.value.id || '',  this.changOrderStatusForm.value.note || '');
    this.orderService.rejectOrder(cancelOrder).subscribe({
      next: (res: any) => {
        this.toastr.success('Chuyển đổi trạng thái đơn hàng thành công !');
        this.hideModal();
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Chuyển đổi trạng thái thất bại !');
      }
    })
  }

  hideModal() {
  }
}

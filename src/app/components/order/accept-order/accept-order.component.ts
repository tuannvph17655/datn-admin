import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {Order} from "../../../models/Order";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {OrderStatus} from "../../../models/OrderStatus";
import {CancelOrder} from "../../../models/CancelOrder";

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.component.html',
  styleUrls: ['./accept-order.component.css']
})
export class AcceptOrderComponent implements OnInit {
  public orders: Order[] = [];
  public totalPrice  = '';
  public payed = '';
  public statusValue  = 'ACCEPT';

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
  ) {
  }

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
      status: 'SHIPPING'
    });
  }
  changOrderStatusToShipping() {
    const orderStatus = new OrderStatus(this.changOrderStatusForm.value.id || '', 'SHIPPING', this.changOrderStatusForm.value.note || '');
    console.log('id ', orderStatus.id);
    this.orderService.changeStatus(orderStatus).subscribe({
      next: (res: any) => {
        this.toastr.success('Duyệt đơn giao hàng thành công !');
        this.hideModal();
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Duyệt đơn giao hàng thất bại !');
      }
    })
  }

  rejectOrder() {
    const cancelOrder = new CancelOrder(this.changOrderStatusForm.value.id || '',  this.changOrderStatusForm.value.note || '');
    this.orderService.rejectOrder(cancelOrder).subscribe({
      next: (res: any) => {
        this.toastr.success('Từ chối đơn hàng thành công !');
        this.hideModal();
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Từ chối đơn hàng thất bại !');
      }
    })
  }

  hideModal() {
  }



}

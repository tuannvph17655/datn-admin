import {Component, OnInit} from '@angular/core';
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderStatus} from "../../../models/OrderStatus";
import {ToastrService} from "ngx-toastr";
import {CancelOrder} from "../../../models/CancelOrder";
import {environment, orderStatus} from "../../../../environments/environment";

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {
  public orders: Order[] = [];
  public ordersActive: Order[] = [];
  public totalPrice = '';
  public payed = '';
  public statusValue = 'PENDING';
  public orderStatus = orderStatus.value;

  filterOrderForm = new FormGroup({
    textSearch: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    page: new FormControl('0'),
    size: new FormControl('100')
  });

  changOrderStatusToAcceptForm = new FormGroup({
    id: new FormControl(''),
    note: new FormControl(''),
    status: new FormControl('')
  });

  checkAll: any;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getListOrder();
    console.log("This status : ",this.orderStatus );
  }

  getListOrder() {
    var filter = new FilterOrderRequest(this.filterOrderForm.value.startDate || ''
      , this.filterOrderForm.value.endDate || ''
      , this.totalPrice
      , this.payed
      , this.statusValue,
      this.filterOrderForm.value.textSearch || ''
      , this.filterOrderForm.value.page || '0', this.filterOrderForm.value.size || '100');

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
    if (data) {
      this.changOrderStatusToAcceptForm.patchValue({
        id: data
      });
    } else {
      this.changOrderStatusToAcceptForm.patchValue({
        id: this.ordersActive.map(value => value.orderId).join(",")
      });
    }
  }

  changOrderStatusToAccept() {
    const orderStatus = new OrderStatus(this.changOrderStatusToAcceptForm.value.id || '', 'ACCEPT', this.changOrderStatusToAcceptForm.value.note || '');
    console.log('id ', orderStatus.id);
    this.orderService.changeStatus(orderStatus).subscribe({
      next: (res: any) => {
        this.toastr.success('Xác nhận đơn hàng thành công !');
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Xác nhận đơn hàng thất bại !');
      }
    })
  }

  rejectOrder() {
    const cancelOrder = new CancelOrder(this.changOrderStatusToAcceptForm.value.id || '', this.changOrderStatusToAcceptForm.value.note || '');
    this.orderService.rejectOrder(cancelOrder).subscribe({
      next: (res: any) => {
        this.toastr.success('Từ chối đơn hàng thành công !');
        this.getListOrder()
      }, error: (err) => {
        this.toastr.error('Từ chối đơn hàng thất bại !');
      }
    })
  }

  onItemSelectSpecialType() {
    this.ordersActive = this.orders.filter(r => r.isActive);
    this.checkAll = this.ordersActive.length === this.orders.length;
  }

  selectAll() {
    this.orders.forEach((item) => {
      item.isActive = this.checkAll;
    });
    this.onItemSelectSpecialType();
  }
}

import { Component, OnInit } from '@angular/core';
import {Order} from "../../../models/Order";
import {OrderService} from "../../../services/order.service";
import {FilterOrderRequest} from "../../../models/FilterOrderRequest";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderStatus} from "../../../models/OrderStatus";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {
 public orders : Order[] = [];
public reason : string = '';
 // orderId : string = '';
public startDate  = new Date();
public endDate = new Date();
public totalPrice = '';
public payed = false;
public statusValue  = 'PENDING';
public textSearch : string = '';
public note  = '';

  filterOrderForm = new FormGroup( {
    textSearch : new FormControl('') ,
    startDate : new FormControl(''),
    endDate : new FormControl('')
  });

  changOrderStatusToAcceptForm = new FormGroup({
    id : new FormControl(''),
    note : new FormControl(''),
    status : new FormControl('')

  });

  constructor(
    private orderService: OrderService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    console.log('The filter' + this.textSearch)
    this.getListOrder();
  }
  getListOrder(){
    var filter = new FilterOrderRequest(this.filterOrderForm.get('startDate')?.value || '',this.filterOrderForm.value.endDate || '',this.totalPrice,this.payed,  this.statusValue,this.filterOrderForm.value.textSearch || '');
    console.log("filter =" +filter.textSearch);
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

  fillDataToFormControl(data ?: string){
    this.changOrderStatusToAcceptForm.patchValue({
      id: data,
      note: '',
      status: 'ACCEPT'
    });
  }

  changOrderStatusToAccept() {
    const orderStatus = new OrderStatus(this.changOrderStatusToAcceptForm.value.id || '', 'ACCEPT', this.changOrderStatusToAcceptForm.value.note || '' );
    console.log('id ' ,orderStatus.id);
    this.orderService.changeStatus(orderStatus).subscribe({
      next: (res :any) => {
        this.toastr.success('Xác nhận đơn hàng thành công !');
        this.hideModal();
        this.getListOrder()
      }, error :(err) => {
        this.toastr.error('Xác nhận đơn hàng thất bại !');
      }
    })
  }

  rejectOrder() {
    const orderStatus = new OrderStatus(this.changOrderStatusToAcceptForm.value.id || '', 'REJECT', this.changOrderStatusToAcceptForm.value.note || '' );
    this.orderService.rejectOrder(orderStatus).subscribe({
      next: (res : any)=> {
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

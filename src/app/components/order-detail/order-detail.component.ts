import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {OrderDetail} from 'src/app/models/OrderDetail';
import {OrderInfo} from 'src/app/models/OrderInfo';
import {OrderStatus} from 'src/app/models/OrderStatus';
import {PriceResult} from 'src/app/models/PriceResult';
import {ProductOrder} from 'src/app/models/ProductOrder';
import {ChangeStatusService} from 'src/app/services/change-status.service';
import {OrderDetailService} from 'src/app/services/order-detail.service';
import {CancelOrder} from "../../models/CancelOrder";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id !: string;
  orderDetail !: OrderDetail;
  productOrder: ProductOrder[] = [];
  orderInfo !: OrderInfo;
  priceResult !: PriceResult;
  orderStatus !: OrderStatus;
  note: string = '';

  @ViewChild('verticalycentered') modal: any;


  changOrderStatusForm = new FormGroup({
    id: new FormControl(''),
    status: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private changeStatusService: ChangeStatusService,
    private toastr: ToastrService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getOrderDetail(this.id);
  }

  get f() {
    return this.changOrderStatusForm.controls;
  }

  public getOrderDetail(id: string) {
    this.orderDetailService.getListOrderDetail(id).subscribe({
      next: (res: any) => {
        console.log("order detail : ", res);
        this.orderDetail = res.data;
        this.productOrder = res.data.items;
        this.priceResult = res.data.priceResult;
        console.log("prodcut order ", this.productOrder)
        console.log("price : ", this.priceResult);
        this.orderInfo = res.data.orderInfo;
      }
      , error: (err) => {
        console.log('err', err);
      }
    })
  }

  hideModal() {
    this.modal.nativeElement.click();
  }

  saveChangeStatus() {
    this.changOrderStatusForm.value.id = this.orderDetail.id;
    this.changOrderStatusForm.value.status = 'ACCEPT';
    this.changeStatusService.changeStatusOrder(this.changOrderStatusForm.value).subscribe({
      next: (res: any) => {
        this.toastr.success("cập nhật trạng thái đơn hàng thành công !");
        this.hideModal();
      }, error: (err) => {
        this.toastr.warning("Cập nhật trạng thái đơn hàng thất bại !");
        console.log(' : ', err);
      }
    })
  }

  rejectOrder() {
    const rejectOrder = new CancelOrder(this.orderDetail.id, this.changOrderStatusForm.value.note as string);
    this.orderService.rejectOrder(rejectOrder).subscribe({
      next: (res: any) => {
        this.toastr.success("Hủy dơn hàng thành công");
        const commands = 'admin/pending-orders';
        this.router.navigate([commands]);
      }, error: (err) => {
        this.toastr.warning("Từ chối đơn hàng thất bại !");
      }
    })
  }

}

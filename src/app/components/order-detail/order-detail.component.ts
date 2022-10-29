import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { OrderInfo } from 'src/app/models/OrderInfo';
import { PriceResult } from 'src/app/models/PriceResult';
import { ProductOrder } from 'src/app/models/ProductOrder';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id !:string;
  orderDetail !: OrderDetail;
  productOrder : ProductOrder[] = [];
  orderInfo !: OrderInfo;
  priceResult !: PriceResult;


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private orderDetailService : OrderDetailService
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getOrderDetail(this.id);
  }

  public getOrderDetail(id : string) {
      this.orderDetailService.getListOrderDetail(id).subscribe({
        next : (res: any) => {
          console.log("order detail : ",res);
          this.orderDetail = res.data;
          this.productOrder = res.data.items;
          this.priceResult = res.data.priceResult;
          console.log("prodcut order " ,this.productOrder )
          console.log("price : ",this.priceResult);
          this.orderInfo = res.data.orderInfo;
        }
        ,error: (err) => {
          console.log('err', err);
        }
      })
  }

}

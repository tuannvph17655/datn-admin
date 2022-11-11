import { Component, OnInit } from '@angular/core';
import {Size} from "../../models/Size";
import {SizeService} from "../../services/size.service";

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  sizes : Size[] = [];
  req: any = {
    "id": "",
    "name" : "",
    "code" : "",
    'pageReq': {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    }
  }
  constructor(
    private sizeService : SizeService
  ) { }

  ngOnInit(
  ): void {
    this.getListSize(this.req);
  }

  getListSize(req : any) {
    this.sizeService.getListSize(req).subscribe({
      next : (req : any) => {
        this.sizes = req.data;
      }
    })
  }

}

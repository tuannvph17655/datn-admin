import {Component, OnInit} from '@angular/core';
import {Material} from "../../models/Material";
import {MaterialService} from "../../services/material.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  public materials: Material[] = [];

  req: any = {
    "name": "",
    "pageReq": {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    }
  }

  constructor(private materialService: MaterialService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getListMaterial(this.req);
  }

  getListMaterial(req: any) {
    this.materialService.getListMaterial(req).subscribe({
        next: (req: any) => {
          this.materials = req.data;
        }, error: (err: any) => {
          console.log("Err : ", err)
          this.toastr.error("Tạo danh mục thất bại !")
        }
      }
    )
  }
}

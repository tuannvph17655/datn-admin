import {Component, OnInit} from '@angular/core';
import {ColorService} from "../../services/color.service";
import {Color, ColorRes} from "../../models/Color";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormControlName, FormGroup, RequiredValidator, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];

  req: any = {
    'textSearch': '',
    'pageReq': {
      "page": 0,
      "pageSize": 15,
      "sortField": "",
      "sortDirection": ""
    }
  }

  colorForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    hex: new FormControl('', [Validators.required])
  })

  constructor(private colorService: ColorService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getListColor(this.req);
  }

  getListColor(req: any) {
    this.colorService.searchColor(req).subscribe({
      next: (req: any) => {
        this.colors = req.data;
      }, error: (err: any) => {
        this.toastr.error("Không có danh sách màu sắc !");
      }
    })
  }

  createColor() {
    const colorRes = new ColorRes(
      this.colorForm.value.id || '',
      this.colorForm.value.name || '',
      this.colorForm.value.hex || ''
    )

    this.colorService.createColor(colorRes).subscribe({
      next : (req : any) => {
        this.toastr.success("Tạo màu sắc thành công !");
        this.getListColor(this.req);
      },
      error : (err : any) => {
        this.toastr.error("Tạo màu sắc thất bại !");
    }
    })
  }

}

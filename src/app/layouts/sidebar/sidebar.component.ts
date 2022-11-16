import { Component, OnInit } from '@angular/core';
import {environment, orderStatus} from "../../../environments/environment";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(

  ) { }

  ngOnInit(): void {
  }

  fillStatus(value ?: any) {
    orderStatus.value = value;
  }

}

import {BootstrapOptions} from "@angular/core";
import {PageReq} from "./PageReq";

export class CategoryReq {
  id ?: String;
  name ?: String;
  des ?: String;

  constructor(id : String,name: String, description: String) {
    this.id = id;
    this.name = name;
    this.des = description;
  }
}

export class CategoryFilter {
  id ?: String;
  active ?: Boolean;
  textSearch ?: String;
  pageReq ?: PageReq;

  constructor(id ?: String, active ?: Boolean, textSearch ?: String, pageReq ?: PageReq) {
    this.id = id;
    this.active = active;
    this.textSearch = textSearch;
    this.pageReq = pageReq;
  }
}

export class Category {
  id ?: String;
  name ?: String;
  des ?: String;
  image ?: String;
  active ?: Boolean;
  createdDate ?: Date;
  createdDateValue ?: String;
  productNumber ?: Number;
}


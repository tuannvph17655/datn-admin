export class PageReq {
  public page ?: Number;
  public pageSize ?: Number;
  public sortField ? : String;
  public sortDirection ? : String;

  constructor(page : Number , pageSize : Number , sortField : String, sortDirection : String) {
    this.page = page;
    this.pageSize = pageSize;
    this.sortField = sortField;
  }

}



import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectOrderComponent } from './reject-order.component';

describe('RejectOrderComponent', () => {
  let component: RejectOrderComponent;
  let fixture: ComponentFixture<RejectOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

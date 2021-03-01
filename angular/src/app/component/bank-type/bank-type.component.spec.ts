import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTypeComponent } from './bank-type.component';

describe('BankTypeComponent', () => {
  let component: BankTypeComponent;
  let fixture: ComponentFixture<BankTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListComponent } from './bank-list.component';

describe('BankListComponent', () => {
  let component: BankListComponent;
  let fixture: ComponentFixture<BankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

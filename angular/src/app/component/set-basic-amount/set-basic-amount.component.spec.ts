import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBasicAmountComponent } from './set-basic-amount.component';

describe('SetBasicAmountComponent', () => {
  let component: SetBasicAmountComponent;
  let fixture: ComponentFixture<SetBasicAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBasicAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBasicAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

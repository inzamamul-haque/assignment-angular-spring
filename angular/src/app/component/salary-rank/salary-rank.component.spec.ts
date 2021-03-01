import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRankComponent } from './salary-rank.component';

describe('SalaryRankComponent', () => {
  let component: SalaryRankComponent;
  let fixture: ComponentFixture<SalaryRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

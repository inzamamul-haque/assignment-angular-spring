import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRankListComponent } from './salary-rank-list.component';

describe('SalaryRankListComponent', () => {
  let component: SalaryRankListComponent;
  let fixture: ComponentFixture<SalaryRankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryRankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryRankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

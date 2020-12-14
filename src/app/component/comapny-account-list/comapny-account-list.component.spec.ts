import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyAccountListComponent } from './comapny-account-list.component';

describe('ComapnyAccountListComponent', () => {
  let component: ComapnyAccountListComponent;
  let fixture: ComponentFixture<ComapnyAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

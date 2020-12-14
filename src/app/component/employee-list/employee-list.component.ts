import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

class BankInfo {
  public name: any;
  public branchName: any;
  public code: any;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  bankInfo: BankInfo[];
  employeeList: Array<{name: string, address: string, houseRent: any, grossSalary: any, basicSalary: any, employeeId: any, medical: any, mobileNo: any}> = [];

  constructor(private employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employee.getAllEmployee().subscribe((res: any) => {
      console.log(res);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0 ; i < res.length; i++) {
        this.employeeList.push({name: res[i].name, address: res[i].address, houseRent: res[i].houseRent,
          grossSalary: res[i].grossSalary, basicSalary: res[i].basicSalary, employeeId: res[i].employeeId, medical: res[i].medicalAllowance, mobileNo: res[i].mobileNo });
      }
    });
  }

  goToEmployee() {
    this.router.navigate(['employee']);
  }
}

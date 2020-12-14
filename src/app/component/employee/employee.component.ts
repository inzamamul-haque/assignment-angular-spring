import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  name: string;
  salaryRank: any;
  address: string;
  mobileNumber: any;
  bankAccount: any;
  houseRent: any;
  grossSalary: any;
  medicalAllowance: any;
  employeeId: any;
  basicSalary: any;
  bankAccountList: Array<{id: any, accountName: any, accountNo: any, accountType: any, currentBalance: any}> = [];
  salaryRanktList: Array<{id: any, basicSalary: any, name: any}> = [];
  constructor(private employee: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getBank();
    this.getAllBankAccount();
    this.getAllSalaryRank();
    this.bankAccount = 'Select Bank Account';
  }
  saveEmployee() {
    if (this.checkConfirmField() === false) {
      return;
    }
    const employeeInfo = {
      name: this.name,
      address: this.address,
      mobileNo: this.mobileNumber,
      salaryRank: this.salaryRank,
      houseRent: this.houseRent,
      grossSalary: this.grossSalary,
      medicalAllowance: this.medicalAllowance,
      bankAccount: this.bankAccount,
      employeeId: this.employeeId,
      basicSalary: this.basicSalary
    };
    this.employee.saveEmployee(employeeInfo).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['employee-list']);
    });
  }

  getBank() {
    this.employee.getBank().subscribe((res: any) => {
      console.log(res);
    });
  }
  getAllBankAccount() {
    this.employee.getAllBankAccount().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankAccountList.push({id: res[i].id, accountName: res[i].accountName, accountNo: res[i].accountNo, accountType: res[i].accountType, currentBalance: res[i].currentBalance});
      }
    });
  }
  getAllSalaryRank() {
    this.employee.getAllSalaryRank().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.salaryRanktList.push({id: res[i].id, basicSalary: res[i].basicSalary, name: res[i].name});
      }
    });
  }
  checkConfirmField() {
    if (this.employeeId) {
     return true;
    } else {
      window.alert('please select unique 4 digit employee Id');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  amount: any;
  bankAccountList: Array<{id: number; accountName: any, accountNo: any, accountType: any, currentBalance: any}> = [];
  companyAccountList: Array<{id: number; accountName: any, accountNo: any, accountType: any, currentBalance: any}> = [];
  bankAccount: any;
  companyAccount: any;
  employeeAccount: any;
  constructor(public employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getAllBankAccount();
    this.getCompanyBankAccount();
  }

  getAllBankAccount() {
    this.employee.getAllBankAccount().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankAccountList.push({id: res[i].id, accountName: res[i].accountName, accountNo: res[i].accountNo, accountType: res[i].accountType, currentBalance: res[i].currentBalance});
      }
    });
  }
  getCompanyBankAccount() {
    this.employee.getCompanyBankAccount().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.companyAccountList.push({id: res[i].id, accountName: res[i].accountName, accountNo: res[i].accountNo, accountType: res[i].accountType, currentBalance: res[i].currentBalance});
      }
    });
  }

  sendMoney() {
    this.employee.sendMoney(this.amount, this.companyAccount, this.employeeAccount).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['company-accountList']);
    });
  }
}

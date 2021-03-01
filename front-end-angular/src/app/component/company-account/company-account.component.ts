import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.scss']
})
export class CompanyAccountComponent implements OnInit {

  name: any;
  accountType: any;
  balance: any;
  accountNumber: any;
  bank: any;
  editAccount: any;
  accountId: any;
  bankList: Array<{id: any, name: any}> = [];
  constructor(private employee: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editAccount = this.route.snapshot.paramMap.get('editAccount');
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    if (this.editAccount) {
      this.getBankAccount();
    }
    this.accountType = 'Current';
    this.getBank();
  }

  saveBankAccount() {
    this.employee.createNewCompanyBankAccount(this.name, this.accountNumber, this.accountType, this.balance, this.bank).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['company-accountList']);
    });
  }
  getBank() {
    this.employee.getBank().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankList.push({id: res[i].id, name: res[i].name});
      }
    });
  }
  getBankAccount() {
    this.employee.getCompanyAccount(this.accountId).subscribe((res: any) => {
      console.log(res);
      this.setBankAccount(res);
    });
  }
  setBankAccount(res: any) {
    this.name = res.accountName;
    this.accountNumber = res.accountNo;
    this.accountType = res.accountType;
    this.balance = res.currentBalance;
  }

  updateBankAccount(accountId: number) {
    this.employee.updateCompanyBankAccount(this.name, this.accountNumber, this.accountType, this.balance, this.bank, accountId).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['company-accountList']);
    });
  }

}

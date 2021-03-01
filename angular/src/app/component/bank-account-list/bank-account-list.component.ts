import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss']
})
export class BankAccountListComponent implements OnInit {
  bankAccountList: Array<{id: number; accountName: any, accountNo: any, accountType: any, currentBalance: any}> = [];

  constructor(private employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getAllBankAccount();
  }
  getAllBankAccount() {
    this.employee.getAllBankAccount().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankAccountList.push({id: res[i].id, accountName: res[i].accountName, accountNo: res[i].accountNo, accountType: res[i].accountType, currentBalance: res[i].currentBalance});
      }
    });
  }

  updateBankAmount(id: number) {
       this.router.navigate(['account', {editAccount: true, accountId: id}]);
  }

  goToEmployeeBank() {
    this.router.navigate(['account']);
  }
}

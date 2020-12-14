import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comapny-account-list',
  templateUrl: './comapny-account-list.component.html',
  styleUrls: ['./comapny-account-list.component.scss']
})
export class ComapnyAccountListComponent implements OnInit {

  bankAccountList: Array<{id: number; accountName: any, accountNo: any, accountType: any, currentBalance: any}> = [];

  constructor(private employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getAllBankAccount();
  }
  getAllBankAccount() {
    this.employee.getCompanyBankAccount().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankAccountList.push({id: res[i].id, accountName: res[i].accountName, accountNo: res[i].accountNo, accountType: res[i].accountType, currentBalance: res[i].currentBalance});
      }
    });
  }

  updateBankAmount(id: number) {
    this.router.navigate(['company-account', {editAccount: true, accountId: id}]);
  }

  goToCompany() {
    this.router.navigate(['company-account']);
  }
}

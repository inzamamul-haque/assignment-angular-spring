import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  bankList: Array<{name: string, branchName: string, code: any}> = [];
  constructor(private employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getBank();
  }
  getBank() {
    this.employee.getBank().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.bankList.push({name: res[i].name, branchName: res[i].branchName, code: res[i].code});
      }
    });
  }

  goToBank() {
    this.router.navigate(['bank']);
  }
}

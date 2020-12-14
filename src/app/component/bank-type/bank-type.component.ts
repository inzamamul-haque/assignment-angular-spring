import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bank-type',
  templateUrl: './bank-type.component.html',
  styleUrls: ['./bank-type.component.scss']
})
export class BankTypeComponent implements OnInit {
  name: string;
  bankCode: string;
  branchName: string;

  constructor(private employee: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewBank() {
    this.employee.saveNewBank(this.name, this.bankCode, this.branchName).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['bank-list']);
    });
  }
}

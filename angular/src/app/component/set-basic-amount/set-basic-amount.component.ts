import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-basic-amount',
  templateUrl: './set-basic-amount.component.html',
  styleUrls: ['./set-basic-amount.component.scss']
})
export class SetBasicAmountComponent implements OnInit {
  amount: any;
  orderInfo: Array<{item: string}> = [];
  constructor(private employee: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  setBasicAmount() {
    this.employee.setBasicAmount(this.amount).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['salaryRank-list']);
    });
  }

  setBasic() {
    this.employee.getAllBankAccount().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
      this.orderInfo.push({item: res.item});
      }
    });
  }
}

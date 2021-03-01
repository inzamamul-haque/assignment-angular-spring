import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-salary-rank-list',
  templateUrl: './salary-rank-list.component.html',
  styleUrls: ['./salary-rank-list.component.scss']
})
export class SalaryRankListComponent implements OnInit {
  salaryRankList: Array<{name: string, rank: string, basicSalary: any}> = [];

  constructor(private employee: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.getAllSalaryRank();
  }
  getAllSalaryRank() {
    this.employee.getAllSalaryRank().subscribe((res: any) => {
      console.log(res);
      for (let i = 0 ; i < res.length; i++) {
        this.salaryRankList.push({name: res[i].name, rank: res[i].rank, basicSalary: res[i].basicSalary});
      }
    });
  }

  goToSalary() {
  this.router.navigate(['salary-rank']);
  }
}

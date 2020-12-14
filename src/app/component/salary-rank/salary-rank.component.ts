import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-salary-rank',
  templateUrl: './salary-rank.component.html',
  styleUrls: ['./salary-rank.component.scss']
})
export class SalaryRankComponent implements OnInit {
  name: string;
  salaryRank: number;
  basicSalary: number;

  constructor(private employee: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSalaryRank() {
    this.employee.createNewSalaryRank(this.name, this.salaryRank, this.basicSalary).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['salaryRank-list']);
    });
  }
}

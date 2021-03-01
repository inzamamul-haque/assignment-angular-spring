import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './component/account/account.component';
import { BankTypeComponent } from './component/bank-type/bank-type.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { HomeComponent } from './component/home/home.component';
import { SalaryRankComponent } from './component/salary-rank/salary-rank.component';
import {BankListComponent} from './component/bank-list/bank-list.component';
import {BankAccountListComponent} from './component/bank-account-list/bank-account-list.component';
import {SalaryRankListComponent} from './component/salary-rank-list/salary-rank-list.component';
import {SetBasicAmountComponent} from './component/set-basic-amount/set-basic-amount.component';
import {CompanyAccountComponent} from './component/company-account/company-account.component';
import {ComapnyAccountListComponent} from './component/comapny-account-list/comapny-account-list.component';
import {SendMoneyComponent} from './component/send-money/send-money.component';


const routes: Routes = [
  {path: '', redirectTo: 'employee-list', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'bank', component: BankTypeComponent},
  {path: 'salary-rank', component: SalaryRankComponent},
  {path: 'account', component: AccountComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'bank-list', component: BankListComponent},
  {path: 'bankAccount-list', component: BankAccountListComponent},
  {path: 'salaryRank-list', component: SalaryRankListComponent},
  {path: 'set-basic', component: SetBasicAmountComponent},
  {path: 'company-account', component: CompanyAccountComponent},
  {path: 'company-accountList', component: ComapnyAccountListComponent},
  {path: 'send-money', component: SendMoneyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { BankTypeComponent } from './component/bank-type/bank-type.component';
import { SalaryRankComponent } from './component/salary-rank/salary-rank.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AccountComponent } from './component/account/account.component';
import { SalaryRankListComponent } from './component/salary-rank-list/salary-rank-list.component';
import { BankListComponent } from './component/bank-list/bank-list.component';
import { BankAccountListComponent } from './component/bank-account-list/bank-account-list.component';
import { SetBasicAmountComponent } from './component/set-basic-amount/set-basic-amount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CompanyAccountComponent } from './component/company-account/company-account.component';
import { ComapnyAccountListComponent } from './component/comapny-account-list/comapny-account-list.component';
import { SendMoneyComponent } from './component/send-money/send-money.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    BankTypeComponent,
    SalaryRankComponent,
    EmployeeListComponent,
    AccountComponent,
    SalaryRankListComponent,
    BankListComponent,
    BankAccountListComponent,
    SetBasicAmountComponent,
    CompanyAccountComponent,
    ComapnyAccountListComponent,
    SendMoneyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

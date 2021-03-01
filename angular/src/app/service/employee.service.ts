import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from './api-url.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private url: ApiUrlService) { }

  getAllEmployee() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.employeeApi + 'getAllEmployee';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  getBank() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankApi + 'getAllBank';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  getAllBankAccount() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'getAllBankAccount';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  getCompanyBankAccount() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'getAllCompanyBankAccount';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  getAllSalaryRank() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.salaryApi + 'getAllSalaryRank';
    return this.http.get(url, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  saveEmployee(employeeInfo: any) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.employeeApi + 'createEmployee';
    const data = {
      name: employeeInfo.name,
      address: employeeInfo.address,
      mobileNo: employeeInfo.mobileNo,
      salaryRank: employeeInfo.salaryRank,
      houseRent: employeeInfo.houseRent,
      grossSalary: employeeInfo.grossSalary,
      medicalAllowance: employeeInfo.medicalAllowance,
      bankAccount: employeeInfo.bankAccount,
      employeeId: employeeInfo.employeeId,
      basicSalary: employeeInfo.basicSalary
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
saveNewBank(name: string, branchCode: string, branchName: string) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankApi + 'createNewBank';
    const data = {
        name: name,
        code: branchCode,
        branchName: branchName
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  setBasicAmount(amount: any) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.salaryApi + 'setBasicAmount';
    const data = {
        amount: amount,
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  sendMoney(amount: any, companyAccount: any, employeeAccount: any) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'sendMoney';
    const data = {
      amount: amount,
      companyAccount: companyAccount,
      employeeAccount: employeeAccount
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  createNewSalaryRank(name: string, rank: number, basic: number) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.salaryApi + 'createNewSalaryRank';
    const data = {
        name: name,
        salaryRank: rank,
        basicSalary: basic
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  createNewBankAccount(name: any, accountNo: any, accountType: any, balance: any, bank: any) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'createNewBankAccount';
    const data = {
        accountName: name,
        accountNo: accountNo,
        accountType: accountType,
        currentBalance: balance,
        bankId: bank
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  createNewCompanyBankAccount(name: any, accountNo: any, accountType: any, balance: any, bank: any) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'createNewCompanyBankAccount';
    const data = {
        accountName: name,
        accountNo: accountNo,
        accountType: accountType,
        currentBalance: balance,
        bankId: bank
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  updateBankAccount(name: any, accountNo: any, accountType: any, balance: any, bank: any, accountId: number) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'updateBankAccount';
    const data = {
        accountName: name,
        accountNo: accountNo,
        accountType: accountType,
        currentBalance: balance,
        bankId: bank,
        accountId: accountId
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}
  updateCompanyBankAccount(name: any, accountNo: any, accountType: any, balance: any, bank: any, accountId: number) {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'updateCompanyBankAccount';
    const data = {
        accountName: name,
        accountNo: accountNo,
        accountType: accountType,
        currentBalance: balance,
        bankId: bank,
        accountId: accountId
    };
    console.log(name);
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
        return res;
    }));
}

  getBankAccount(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'getBankAccount';
    // tslint:disable-next-line:one-variable-per-declaration
    const data = {
      accountId: id
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
  getCompanyAccount(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = this.url.bankAccountApi + 'getCompanyAccount';
    // tslint:disable-next-line:one-variable-per-declaration
    const data = {
      accountId: id
    };
    return this.http.post(url, data, httpOptions).pipe(map((res: any) => {
      return res;
    }));
  }
}

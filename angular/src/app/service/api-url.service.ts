import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  public apiUrl = 'http://localhost:9005/';
  public employeeApi = this.apiUrl + 'employee/';
  public bankApi = this.apiUrl + 'bankApi/';
  public salaryApi = this.apiUrl + 'salaryApi/';
  public bankAccountApi = this.apiUrl + 'bankAccountApi/';

  constructor() { }
}

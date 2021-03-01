package com.in.ibcs.service;

import com.in.ibcs.Pojo.EmployeePojo;
import com.in.ibcs.entity.Account;
import com.in.ibcs.entity.Bank;
import com.in.ibcs.entity.Employee;
import com.in.ibcs.entity.SalaryRank;
import com.in.ibcs.repository.AccountRepository;
import com.in.ibcs.repository.BankRepository;
import com.in.ibcs.repository.EmployeeRepository;
import com.in.ibcs.repository.SalaryRankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    SalaryRankRepository salaryRankRepository;

    @Autowired
    AccountRepository accountRepository;

    @Transactional
    public Employee createNewEmployee(EmployeePojo employeePojo) {
        Optional<SalaryRank> salaryRank = salaryRankRepository.findById(employeePojo.salaryRank);
        SalaryRank salary = salaryRank.get();
        Optional<Account> account = accountRepository.findById(employeePojo.bankAccount);
        Account account1 = account.get();
        Employee employee = new Employee();
        employee.setName(employeePojo.name);
        employee.setEmployeeId(employeePojo.employeeId);
        employee.setAddress(employeePojo.address);
        employee.setMobileNo(employeePojo.mobileNo);
        employee.setSalaryRank(salary);
        employee.setAccount(account1);
        employee.setBasicSalary(employeePojo.basicSalary);
        double basicSalary = salary.getBasicSalary();
        double medicalAllowance = ( basicSalary * 15) / 100.00;
        double houseRent = ( basicSalary * 20) / 100.00;
        double grossSalary = basicSalary + medicalAllowance + houseRent;
        employee.setBasicSalary(basicSalary);
        employee.setMedicalAllowance(medicalAllowance);
        employee.setHouseRent(houseRent);
        employee.setGrossSalary(grossSalary);
        employeeRepository.save(employee);
        return employee;
    }
}

package com.in.ibcs.controller;

import com.in.ibcs.Pojo.EmployeePojo;
import com.in.ibcs.entity.Employee;
import com.in.ibcs.repository.EmployeeRepository;
import com.in.ibcs.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "employee")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping(value = "/createEmployee", method = RequestMethod.POST)
    public Employee createNewEmployee(@RequestBody EmployeePojo employeePojo) {
       return employeeService.createNewEmployee(employeePojo);
    }

    @RequestMapping(value = "/getAllEmployee", method = RequestMethod.GET)
    public List<Employee> getAllEmployee() {
        List<Employee> employee = employeeRepository.findAll();
        return employee;
    }
}


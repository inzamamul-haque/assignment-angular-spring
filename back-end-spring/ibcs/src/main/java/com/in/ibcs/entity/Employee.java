package com.in.ibcs.entity;

import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@EntityListeners(AuditingEntityListener.class)
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(length = 4, unique = true)
    private String employeeId;
    private String address;
    private String mobileNo;
    @ManyToOne
    @JoinColumn
    Account Account;
    @ManyToOne
    @JoinColumn
    SalaryRank salaryRank;
    private double basicSalary;
    private double medicalAllowance;
    private double houseRent;
    private double grossSalary;
}

package com.in.ibcs.entity;

import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "salaryRank")
@EntityListeners(AuditingEntityListener.class)
@Data
public class SalaryRank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    private int rank;
    private double basicSalary;

}

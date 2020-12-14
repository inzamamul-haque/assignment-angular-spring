package com.in.ibcs.entity;

import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "account")
@EntityListeners(AuditingEntityListener.class)
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountName;
    @Column(nullable = false)
    private String accountNo;
    private String accountType;
    private double currentBalance;
    @ManyToOne
    @JoinColumn
    Bank bank;

}

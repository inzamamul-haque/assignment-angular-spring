package com.in.ibcs.service;

import com.in.ibcs.Pojo.BankPojo;
import com.in.ibcs.entity.Bank;
import com.in.ibcs.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService {
    @Autowired
    BankRepository bankRepository;

    public Bank createNewBank(BankPojo bankPojo) {
        Bank bank = new Bank();
        bank.setName(bankPojo.name);
        bank.setBranchName(bankPojo.branchName);
        bank.setCode(bankPojo.code);
        bankRepository.save(bank);
        return bank;
    }
}

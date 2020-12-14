package com.in.ibcs.controller;

import com.in.ibcs.Pojo.BankPojo;
import com.in.ibcs.entity.Bank;
import com.in.ibcs.entity.Employee;
import com.in.ibcs.repository.BankRepository;
import com.in.ibcs.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("bankApi")
public class BankController {
    @Autowired
    BankService bankService;
    @Autowired
    BankRepository bankRepository;

    @RequestMapping("/createNewBank")
    public Bank createNewBank (@RequestBody BankPojo bankPojo) {
        return bankService.createNewBank(bankPojo);
    }

    @RequestMapping(value = "/getAllBank", method = RequestMethod.GET)
    public List<Bank> getAllBank() {
        List<Bank> bank = bankRepository.findAll();
        return bank;
    }
}

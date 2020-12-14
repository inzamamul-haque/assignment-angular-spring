package com.in.ibcs.controller;

import com.in.ibcs.Pojo.AccountPojo;
import com.in.ibcs.entity.Account;
import com.in.ibcs.entity.CompanyAccount;
import com.in.ibcs.repository.AccountRepository;
import com.in.ibcs.repository.CompanyAccountRepository;
import com.in.ibcs.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("bankAccountApi")
public class AccountController {
    @Autowired
    AccountService accountService;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    CompanyAccountRepository companyAccountRepository;
    @RequestMapping("/createNewBankAccount")
    public Account createNewBankAccount(@RequestBody AccountPojo accountPojo) {
        return accountService.createNewBankAccount(accountPojo);
    }

    @RequestMapping(value = "/getAllBankAccount", method = RequestMethod.GET)
    public List<Account> getAllBankAccount() {
        List<Account> accounts = accountRepository.findAll();
        return accounts;
    }
    @RequestMapping(value = "/getAllCompanyBankAccount", method = RequestMethod.GET)
    public List<CompanyAccount> getAllCompanyBankAccount() {
        List<CompanyAccount> companyAccounts = companyAccountRepository.findAll();
        return companyAccounts;
    }

    @RequestMapping(value = "/getBankAccount", method = RequestMethod.POST)
    public Account getBankAccount(@RequestBody AccountPojo accountPojo) {
        Optional<Account> account = accountRepository.findById(accountPojo.accountId);
        Account accounts = account.get();
        return accounts;
    }
    @RequestMapping(value = "/getCompanyAccount", method = RequestMethod.POST)
    public CompanyAccount getCompanyAccount(@RequestBody AccountPojo accountPojo) {
        Optional<CompanyAccount> account = companyAccountRepository.findById(accountPojo.accountId);
        CompanyAccount accounts = account.get();
        return accounts;
    }

    @RequestMapping(value = "/updateBankAccount", method = RequestMethod.POST)
    public Account updateBankAccount(@RequestBody AccountPojo accountPojo) {
        return accountService.updateBankAccount(accountPojo);
    }
    @RequestMapping(value = "/updateCompanyBankAccount", method = RequestMethod.POST)
    public CompanyAccount updateCompanyBankAccount(@RequestBody AccountPojo accountPojo) {
        return accountService.updateCompanyBankAccount(accountPojo);
    }

    @RequestMapping(value = "/createNewCompanyBankAccount")
    public CompanyAccount createNewCompanyBankAccount(@RequestBody AccountPojo accountPojo) {
        return accountService.createNewCompanyBankAccount(accountPojo);
    }


    @RequestMapping(value = "/sendMoney", method = RequestMethod.POST)
    public void sendMoney (@RequestBody AccountPojo accountPojo) {
        accountService.sendMoney(accountPojo);
    }
}

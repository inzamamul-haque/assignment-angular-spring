package com.in.ibcs.service;

import com.in.ibcs.Pojo.AccountPojo;
import com.in.ibcs.entity.Account;
import com.in.ibcs.entity.Bank;
import com.in.ibcs.entity.CompanyAccount;
import com.in.ibcs.repository.AccountRepository;
import com.in.ibcs.repository.BankRepository;
import com.in.ibcs.repository.CompanyAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    BankRepository bankRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    CompanyAccountRepository companyAccountRepository;
    public Account createNewBankAccount(AccountPojo accountPojo) {
        Account account = new Account();
        Optional<Bank> bank = bankRepository.findById(accountPojo.bankId);
        Bank bank1 = bank.get();
        account.setAccountName(accountPojo.accountName);
        account.setAccountNo(accountPojo.accountNo);
        account.setAccountType(accountPojo.accountType);
        account.setCurrentBalance(accountPojo.currentBalance);
        account.setBank(bank1);
        accountRepository.save(account);
        return account;
    }
    public CompanyAccount createNewCompanyBankAccount(AccountPojo accountPojo) {
        CompanyAccount companyAccount = new CompanyAccount();
        Optional<Bank> bank = bankRepository.findById(accountPojo.bankId);
        Bank bank1 = bank.get();
        companyAccount.setAccountName(accountPojo.accountName);
        companyAccount.setAccountNo(accountPojo.accountNo);
        companyAccount.setAccountType(accountPojo.accountType);
        companyAccount.setCurrentBalance(accountPojo.currentBalance);
        companyAccount.setBank(bank1);
        companyAccountRepository.save(companyAccount);
        return companyAccount;
    }
    public Account updateBankAccount(AccountPojo accountPojo) {
        Optional<Account> account = accountRepository.findById(accountPojo.accountId);
        Account accounts = account.get();
        Optional<Bank> bank = bankRepository.findById(accountPojo.bankId);
        Bank bank1 = bank.get();
        accounts.setAccountName(accountPojo.accountName);
        accounts.setAccountNo(accountPojo.accountNo);
        accounts.setAccountType(accountPojo.accountType);
        accounts.setCurrentBalance(accountPojo.currentBalance);
        accounts.setBank(bank1);
        accountRepository.save(accounts);
        return accounts;
    }
    public CompanyAccount updateCompanyBankAccount(AccountPojo accountPojo) {
        Optional<CompanyAccount> account = companyAccountRepository.findById(accountPojo.accountId);
        CompanyAccount accounts = account.get();
        Optional<Bank> bank = bankRepository.findById(accountPojo.bankId);
        Bank bank1 = bank.get();
        accounts.setAccountName(accountPojo.accountName);
        accounts.setAccountNo(accountPojo.accountNo);
        accounts.setAccountType(accountPojo.accountType);
        accounts.setCurrentBalance(accountPojo.currentBalance);
        accounts.setBank(bank1);
        companyAccountRepository.save(accounts);
        return accounts;
    }
    @Transactional
    public void sendMoney(AccountPojo accountPojo) {
        Optional<CompanyAccount> companyAccount = companyAccountRepository.findById(accountPojo.companyAccount);
        CompanyAccount companyAccount1 = companyAccount.get();
        double currentBalance = companyAccount1.getCurrentBalance();
        double newBalance = currentBalance - accountPojo.amount;
        companyAccount1.setCurrentBalance(newBalance);
        Optional<Account> account = accountRepository.findById(accountPojo.employeeAccount);
        Account account1 = account.get();
        double currentBalanceEmployee = account1.getCurrentBalance();
        double newBalanceEmployee = currentBalanceEmployee + accountPojo.amount;
        account1.setCurrentBalance(newBalanceEmployee);
        accountRepository.save(account1);
        companyAccountRepository.save(companyAccount1);

    }
}

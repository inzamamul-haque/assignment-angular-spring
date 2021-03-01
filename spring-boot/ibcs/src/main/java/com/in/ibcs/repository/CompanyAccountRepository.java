package com.in.ibcs.repository;

import com.in.ibcs.entity.CompanyAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyAccountRepository extends JpaRepository<CompanyAccount, Long> {
}

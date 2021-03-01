package com.in.ibcs.service;

import com.in.ibcs.Pojo.SalaryRankPojo;
import com.in.ibcs.entity.SalaryRank;
import com.in.ibcs.repository.SalaryRankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SalaryRankService {
    @Autowired
    SalaryRankRepository salaryRankRepository;
    public SalaryRank createNewSalaryRank(SalaryRankPojo salaryRankPojo) {
        SalaryRank salaryRank = new SalaryRank();
        salaryRank.setName(salaryRankPojo.name);
        salaryRank.setRank(salaryRankPojo.salaryRank);
        salaryRank.setBasicSalary(salaryRankPojo.basicSalary);
        salaryRankRepository.save(salaryRank);
        return salaryRank;
    }
    @Transactional
    public void setBasicSalary(SalaryRankPojo salaryRankPojo) {
            List<SalaryRank> rankList = salaryRankRepository.findAllByOrderByRankDesc();
            for(SalaryRank salaryRank : rankList) {
                salaryRank.setBasicSalary(salaryRankPojo.amount);
                salaryRankPojo.amount += 5000;
                salaryRankRepository.save(salaryRank);
            }
    }
}

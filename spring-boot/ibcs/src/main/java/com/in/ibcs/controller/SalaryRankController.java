package com.in.ibcs.controller;

import com.in.ibcs.Pojo.SalaryRankPojo;
import com.in.ibcs.entity.SalaryRank;
import com.in.ibcs.repository.SalaryRankRepository;
import com.in.ibcs.service.SalaryRankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "salaryApi")
public class SalaryRankController {
    @Autowired
    SalaryRankService salaryRankService;

    @Autowired
    SalaryRankRepository salaryRankRepository;

    @RequestMapping("/createNewSalaryRank")
    public SalaryRank createNewSalaryRank(@RequestBody SalaryRankPojo salaryRankPojo) {
     return salaryRankService.createNewSalaryRank(salaryRankPojo);
    }

    @RequestMapping(value = "/getAllSalaryRank", method = RequestMethod.GET)
    public List<SalaryRank> getAllSalaryRank() {
        List<SalaryRank> salaryRank = salaryRankRepository.findAll();
        return salaryRank;
    }
    @RequestMapping(value = "/setBasicAmount", method = RequestMethod.POST)
    public void setBasicAmount(@RequestBody  SalaryRankPojo salaryRankPojo) {
        salaryRankService.setBasicSalary(salaryRankPojo);
    }
}


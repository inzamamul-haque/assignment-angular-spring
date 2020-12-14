package com.in.ibcs.repository;

import com.in.ibcs.entity.SalaryRank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalaryRankRepository extends JpaRepository<SalaryRank, Long> {
    List<SalaryRank> findAllByOrderByRankDesc();
}

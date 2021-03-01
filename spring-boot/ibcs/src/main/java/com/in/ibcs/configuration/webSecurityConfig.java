package com.in.ibcs.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
@Configuration
public class webSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests().antMatchers("employee").permitAll();
        http.authorizeRequests().antMatchers("bankApi").permitAll();
        http.authorizeRequests().antMatchers("salaryApi").permitAll();
        http.authorizeRequests().antMatchers("bankAccountApi").permitAll();
        http.csrf().disable();
    }


}

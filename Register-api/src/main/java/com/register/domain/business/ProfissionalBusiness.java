package com.register.domain.business;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.register.domain.entity.Profissional;
import com.register.domain.repository.ProfissionalRepository;

@Component
public class ProfissionalBusiness {

	@Autowired
	private ProfissionalRepository repository;

	
	@Transactional
	public Integer update(Profissional prof) {
		return repository.update(prof.getNome(), prof.getCelular(), prof.getEndereco(),  prof.getFuncao(), prof.getId());
	}	
	
	
}

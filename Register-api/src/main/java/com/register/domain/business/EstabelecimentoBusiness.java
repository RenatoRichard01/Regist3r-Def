package com.register.domain.business;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.register.domain.entity.Estabelecimento;
import com.register.domain.repository.EstabelecimentoRepository;

@Component
public class EstabelecimentoBusiness {

	@Autowired
	private EstabelecimentoRepository repository;
	
	@Transactional
	public Integer update(Estabelecimento estab) {
		return repository.update(estab.getNome(), estab.getTelefone(), estab.getEndereco(), estab.getId());
	}
	
	@Transactional
	public Integer updateRelacao(Estabelecimento estab) {
		List<Estabelecimento> estabelec = repository.findByIdEstabelecimento(estab.getId());
		
		if(!estabelec.isEmpty() && estabelec.get(0).getIdProfissional() == null) {
			return repository.updateRelacao(estab.getIdProfissional(), estab.getId());
		}else {
			return 0;
		}
		
		
		
	}
	
	
	
}

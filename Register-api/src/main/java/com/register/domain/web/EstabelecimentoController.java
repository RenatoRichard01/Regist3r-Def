package com.register.domain.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.register.domain.business.EstabelecimentoBusiness;
import com.register.domain.entity.Estabelecimento;
import com.register.domain.repository.EstabelecimentoRepository;

@RestController
@RequestMapping("/api/register/estabelecimento")
public class EstabelecimentoController {
	
	@Autowired
	private EstabelecimentoRepository repository;
	
	@Autowired
	private EstabelecimentoBusiness business;
	
	@GetMapping(value="/getEstabelecimento")
	public ResponseEntity<List<Estabelecimento>> findAllEstabelecimento(){
		List<Estabelecimento> result = repository.findAll();
		return ResponseEntity.ok(result);
	}
	
	@GetMapping(value="/getNameEstabelecimento")
	public ResponseEntity<List<Estabelecimento>> findAllNameEstabelecimento(){
		List<Estabelecimento> result = repository.getNameEstabelecimento();
		return ResponseEntity.ok(result);
	}
	
	@PostMapping(value = "/create")
	@ResponseBody
	public ResponseEntity<Estabelecimento> save(@RequestBody Estabelecimento estab){
		Estabelecimento response = repository.save(estab);
		return ResponseEntity.ok(response);
	}
	
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
		Estabelecimento estab = new Estabelecimento();
		estab.setId(id);
		repository.delete(estab);
		return ResponseEntity.ok(id);
	}
	
	@PutMapping(value="/update")
	@ResponseBody
	public ResponseEntity<Integer> update(@RequestBody Estabelecimento est){
		Integer response = business.update(est);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping(value="/vincular")
	@ResponseBody
	public ResponseEntity<Integer> vincular(@RequestBody Estabelecimento est){
		Integer response = business.updateRelacao(est);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value="/getRelacionamento")
	public ResponseEntity<List<Estabelecimento>> findAllRelacionamento(){
		List<Estabelecimento> result = repository.findRelacionamento();
		return ResponseEntity.ok(result);
	}
	

	
	
}

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

import com.register.domain.business.ProfissionalBusiness;
import com.register.domain.entity.Profissional;
import com.register.domain.repository.ProfissionalRepository;

@RestController
@RequestMapping("/api/register")
public class ProfissionalController {
	
	@Autowired
	private ProfissionalRepository repository;
	
	@Autowired
	private ProfissionalBusiness business;
	
	
	@GetMapping(value = "/getProfissional")
	public ResponseEntity<List<Profissional>> findAllProfissional(){
		List<Profissional> result = repository.findAll();
		return ResponseEntity.ok(result);
	}
	
	@GetMapping(value="/getNameProfissionais")
	public ResponseEntity<List<Profissional>> findNameProfissional(){
		List<Profissional> result = repository.getNameProfissionais();
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
		Profissional prof= new Profissional();
		prof.setId(id);
		repository.delete(prof);
		return ResponseEntity.ok(id);
	}
	
	@PostMapping(value = "/create")
	@ResponseBody
	public ResponseEntity<Profissional> save(@RequestBody Profissional prof){
		Profissional response = repository.save(prof);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping(value = "/update")
	@ResponseBody
	public ResponseEntity<Integer> update(@RequestBody Profissional prof){
		Integer response = business.update(prof);
		return ResponseEntity.ok(response);
	}
}

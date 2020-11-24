package com.register.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.register.domain.entity.Profissional;

public interface ProfissionalRepository extends JpaRepository<Profissional, Long>{
	
	@Modifying
	@Query("update Profissional "
			+ "set	nome = :nome, "
			+ "		celular = :celular, "
			+ "		endereco = :endereco, "
			+ "		funcao = :funcao "
			+ "where id = :id ")
	public Integer update(@Param("nome") String nome, @Param("celular") String celular, @Param("endereco") String endereco, @Param("funcao") String funcao,
			@Param("id") Long id);
	
	@Query("select new Profissional(id, nome) from Profissional")
	public List<Profissional> getNameProfissionais();
}

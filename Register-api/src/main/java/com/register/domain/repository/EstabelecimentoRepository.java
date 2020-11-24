package com.register.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.register.domain.entity.Estabelecimento;

public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Long>{
	
	@Modifying
	@Query("update Estabelecimento "
			+ "set 	nome = :nome, "
			+ "	    telefone = :telefone, "
			+ "		endereco = :endereco "
			+ "where id = :id "
			)
	public Integer update(@Param("nome") String nome, @Param("telefone") String telefone, @Param("endereco") String endereco, @Param("id") Long id);
	
	@Modifying
	@Query(" update Estabelecimento "
			+ "set idProfissional = :idProf "
			+ "where id = :id "
		)
	public Integer updateRelacao(@Param("idProf") Long idProf, @Param("id") Long id);
	
	@Query("select new Estabelecimento(id, nome) from Estabelecimento where idProfissional is null")
	public List<Estabelecimento> getNameEstabelecimento();
	
	@Query("select new Estabelecimento(id, nome, idProfissional) from Estabelecimento where id=:id")
	public List<Estabelecimento> findByIdEstabelecimento(@Param("id") Long id);
	
	@Query("select new Estabelecimento(estab.id, estab.nome, prof.nome) "
			+ "from Estabelecimento estab "
			+ "inner join estab.profissional prof")
	public List<Estabelecimento> findRelacionamento();
	
	

}

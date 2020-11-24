package com.register.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
@Table(name = "profissional")
public class Profissional {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="nome")
	private String nome;
	
	@Column(name="endereco")
	private String endereco;
	
	@Column(name="celular")
	private String celular;
	
	@Column(name="residencial")
	private String residencial;
	
	@Column(name="funcao")
	private String funcao;
	
	public Profissional(String nome, String endereco, String celular, String funcao) {
		super();
		this.nome = nome;
		this.endereco = endereco;
		this.celular = celular;
		this.funcao = funcao;
	}
	public Profissional(Long id,String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}
	public Profissional(String nome) {
		super();
		this.nome = nome;
	}
	
	
	
}

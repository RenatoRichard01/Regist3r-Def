package com.register.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "estabelecimento")
public class Estabelecimento {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="endereco")
	private String endereco;
	
	@Column(name="telefone")
	private String telefone;
	
	@Column(name="id_profissional")
	private Long idProfissional;
	
	@JoinColumn(name = "id_profissional", referencedColumnName = "id", insertable = false, updatable = false)
	@ManyToOne
	private Profissional profissional;

	public Estabelecimento(Long id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}
	public Estabelecimento(Long id) {
		super();
		this.id = id;
	}
	public Estabelecimento(Long id, String nome, Long idProfissional) {
		super();
		this.id = id;
		this.nome = nome;
		this.idProfissional = idProfissional;
	}
	
	public Estabelecimento(Long id, String nome, String profissional) {
		super();
		this.id = id;
		this.nome = nome;
		this.profissional = new Profissional(profissional);
	}
	
}

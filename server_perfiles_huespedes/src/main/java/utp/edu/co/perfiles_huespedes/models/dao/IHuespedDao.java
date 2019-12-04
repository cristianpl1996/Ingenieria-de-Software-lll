package utp.edu.co.perfiles_huespedes.models.dao;

import org.springframework.data.repository.CrudRepository;

import utp.edu.co.perfiles_huespedes.models.entity.Huesped;

public interface IHuespedDao extends CrudRepository<Huesped, Long> {

	public Huesped findByUsername(String username);
}

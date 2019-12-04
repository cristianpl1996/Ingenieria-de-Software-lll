package utp.edu.co.perfiles_huespedes.models.dao;

import org.springframework.data.repository.CrudRepository;

import utp.edu.co.perfiles_huespedes.models.entity.Reserva;

public interface IReservaDao extends CrudRepository<Reserva, Long> {
	
}

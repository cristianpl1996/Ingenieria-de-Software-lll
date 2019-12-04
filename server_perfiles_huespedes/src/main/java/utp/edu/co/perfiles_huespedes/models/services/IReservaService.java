package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import utp.edu.co.perfiles_huespedes.models.entity.Reserva;

public interface IReservaService {

	public List<Reserva> findAll();

	public Reserva findById(Long id);

	public Reserva save(Reserva huesped);

	public void delete(Long id);
}

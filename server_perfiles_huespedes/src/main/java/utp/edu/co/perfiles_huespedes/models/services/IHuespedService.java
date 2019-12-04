package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import utp.edu.co.perfiles_huespedes.models.entity.Huesped;

public interface IHuespedService {
	
	public List<Huesped> findAll();

	public Huesped findById(Long id);

	public Huesped save(Huesped huesped);

	public void delete(Long id);
	
	public Huesped findByUsername(String username);
}

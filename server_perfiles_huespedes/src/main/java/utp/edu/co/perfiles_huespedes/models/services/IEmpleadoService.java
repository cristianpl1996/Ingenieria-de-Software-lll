package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import utp.edu.co.perfiles_huespedes.models.entity.Empleado;

public interface IEmpleadoService {

	public List<Empleado> findAll();

	public Empleado findById(Long id);

	public Empleado save(Empleado empleado);

	public void delete(Long id);
	
	public Empleado findByUsername(String username);
	
}

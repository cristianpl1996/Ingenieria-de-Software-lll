package utp.edu.co.perfiles_huespedes.models.dao;

import org.springframework.data.repository.CrudRepository;

import utp.edu.co.perfiles_huespedes.models.entity.Empleado;

public interface IEmpleadoDao extends CrudRepository<Empleado, Long> {

	public Empleado findByUsername(String username);
}

package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import utp.edu.co.perfiles_huespedes.models.entity.Role;

public interface IRolService {

	public Role save(Role rol);
	
	public List<Role> findAll();
}

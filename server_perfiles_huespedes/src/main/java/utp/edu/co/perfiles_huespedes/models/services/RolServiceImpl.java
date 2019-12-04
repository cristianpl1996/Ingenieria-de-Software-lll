package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import utp.edu.co.perfiles_huespedes.models.dao.IRolDao;
import utp.edu.co.perfiles_huespedes.models.entity.Role;

@Service
public class RolServiceImpl implements IRolService {
	
	@Autowired
	private IRolDao rolRepository;

	@Override
	public Role save(Role rol) {
		Role rolSaved = null;
		if (isValidRol(rol)) {
			rolSaved = rolRepository.save(rol);
		}
		return rolSaved;
	}
	
	private boolean isValidRol(Role rol) {
		return rol != null && rol.getNombre() != null;
	}

	@Override
	public List<Role> findAll() {
		// TODO Auto-generated method stub
		return null;
	}



}

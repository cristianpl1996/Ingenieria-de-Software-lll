package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import utp.edu.co.perfiles_huespedes.models.dao.IEmpleadoDao;
import utp.edu.co.perfiles_huespedes.models.entity.Empleado;

@Service("empleado")
public class EmpleadoServiceImpl implements IEmpleadoService, UserDetailsService {

	private Logger logger = LoggerFactory.getLogger(EmpleadoServiceImpl.class);

	@Autowired
	private IEmpleadoDao empleadoDao;

	@Override
	@Transactional(readOnly = true)
	public List<Empleado> findAll() {
		return (List<Empleado>) empleadoDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Empleado findById(Long id) {
		return empleadoDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Empleado save(Empleado empleado) {
		return empleadoDao.save(empleado);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		empleadoDao.deleteById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Empleado empleado = empleadoDao.findByUsername(username);

		if (empleado == null) {
			logger.error("Error en el login: no existe usuario " + username + " en el sistema!");
			throw new UsernameNotFoundException("Error en el login: no existe usuario " + username + " en el sistema!");
		}

		List<GrantedAuthority> authorities = empleado.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getNombre()))
				.peek(authority -> logger.info(authority.getAuthority())).collect(Collectors.toList());

		return new User(empleado.getUsername(), empleado.getPassword(), empleado.getEnabled(), true, true, true,
				authorities);
	}

	@Override
	public Empleado findByUsername(String username) {
		return empleadoDao.findByUsername(username);
	}

}

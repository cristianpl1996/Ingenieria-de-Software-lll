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

import utp.edu.co.perfiles_huespedes.models.dao.IHuespedDao;
import utp.edu.co.perfiles_huespedes.models.entity.Huesped;

@Service("huesped")
public class HuespedServiceImpl implements IHuespedService, UserDetailsService {
	
	private Logger logger = LoggerFactory.getLogger(EmpleadoServiceImpl.class);

	@Autowired
	private IHuespedDao huespedDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Huesped> findAll() {
		return (List<Huesped>) huespedDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Huesped findById(Long id) {
		return huespedDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Huesped save(Huesped huesped) {
		return huespedDao.save(huesped);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		huespedDao.deleteById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Huesped huesped = huespedDao.findByUsername(username);

		if (huesped == null) {
			logger.error("Error en el login: no existe usuario " + username + " en el sistema!");
			throw new UsernameNotFoundException("Error en el login: no existe usuario " + username + " en el sistema!");
		}

		List<GrantedAuthority> authorities = huesped.getTipos().stream()
				.map(role -> new SimpleGrantedAuthority(role.getNombre()))
				.peek(authority -> logger.info(authority.getAuthority())).collect(Collectors.toList());

		return new User(huesped.getUsername(), huesped.getPassword(), huesped.getEnabled(), true, true, true,
				authorities);
	}

	@Override
	public Huesped findByUsername(String username) {
		return huespedDao.findByUsername(username);
	}

}

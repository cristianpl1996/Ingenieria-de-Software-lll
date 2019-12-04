package utp.edu.co.perfiles_huespedes.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import utp.edu.co.perfiles_huespedes.models.dao.IReservaDao;
import utp.edu.co.perfiles_huespedes.models.entity.Reserva;

@Service
public class ReservaServiceImpl implements IReservaService{

	@Autowired
	private IReservaDao reservaDao;	
	
	@Override
	@Transactional(readOnly = true)
	public List<Reserva> findAll() {
		return (List<Reserva>) reservaDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Reserva findById(Long id) {
		return  reservaDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Reserva save(Reserva huesped) {
		return reservaDao.save(huesped);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		reservaDao.deleteById(id);
	}

}

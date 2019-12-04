package utp.edu.co.perfiles_huespedes.models.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import utp.edu.co.perfiles_huespedes.models.entity.Role;

@Repository
public interface IRolDao extends CrudRepository<Role, Long> {

}

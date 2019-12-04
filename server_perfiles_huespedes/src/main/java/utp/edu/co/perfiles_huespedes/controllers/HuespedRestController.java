package utp.edu.co.perfiles_huespedes.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import utp.edu.co.perfiles_huespedes.models.entity.Huesped;
import utp.edu.co.perfiles_huespedes.models.services.IHuespedService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class HuespedRestController {

	@Autowired
	private IHuespedService huespedService;

	@GetMapping("/huespedes")
	public List<Huesped> index() {
		return huespedService.findAll();
	}

	@GetMapping("/huespedes/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		Huesped huesped = null;
		Map<String, Object> response = new HashMap<>();
		try {
			huesped = huespedService.findById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error en realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (huesped == null) {
			response.put("mensaje", "El huesped ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Huesped>(huesped, HttpStatus.OK);
	}

	@PostMapping("/huespedes")
	public ResponseEntity<?> create(@RequestBody Huesped huesped) {
		Huesped huespedNew = null;
		Map<String, Object> response = new HashMap<>();
		try {
			huespedNew = huespedService.save(huesped);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error en realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El huesped ha sido creado con éxito");
		response.put("huesped", huespedNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@PutMapping("/huespedes/{id}")
	public ResponseEntity<?> update(@RequestBody Huesped huesped, @PathVariable Long id) {
		Huesped huespedActual = huespedService.findById(id);
		Huesped huespedUpdate = null;
		Map<String, Object> response = new HashMap<>();
		if (huespedActual == null) {
			response.put("mensaje", "Error no se pudo editar, El huesped ID: "
					.concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		try {
			huespedActual.setNombres(huesped.getNombres());
			huespedActual.setApellidos(huesped.getApellidos());
			huespedActual.setCedula(huesped.getCedula());
			huespedActual.setTelefono(huesped.getTelefono());
			huespedActual.setPais(huesped.getPais());
			huespedActual.setCiudad(huesped.getCiudad());
			huespedActual.setDireccion(huesped.getDireccion());
			huespedActual.setUsername(huesped.getUsername());
			huespedActual.setPassword(huesped.getPassword());
			huespedUpdate = huespedService.save(huespedActual);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar el huesped en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El huesped ha sido actualizado con éxito");
		response.put("empleado", huespedUpdate);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@DeleteMapping("/huespedes/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		try {
			huespedService.delete(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el huesped en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El huesped ha sido eliminado con éxito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
}

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

import utp.edu.co.perfiles_huespedes.models.entity.Reserva;
import utp.edu.co.perfiles_huespedes.models.services.IReservaService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class ReservaRestController {

	@Autowired
	private IReservaService reservaService;
	
	@GetMapping("/reservas")
	public List<Reserva> index() {
		return reservaService.findAll();
	}

	@GetMapping("/reservas/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		Reserva reserva = null;
		Map<String, Object> response = new HashMap<>();
		try {
			reserva = reservaService.findById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error en realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (reserva == null) {
			response.put("mensaje", "La reserva ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Reserva>(reserva, HttpStatus.OK);
	}

	@PostMapping("/reservas")
	public ResponseEntity<?> create(@RequestBody Reserva reserva) {
		Reserva reservaNew = null;
		Map<String, Object> response = new HashMap<>();
		try {
			reservaNew = reservaService.save(reserva);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error en realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La reserva ha sido creado con éxito");
		response.put("reserva", reservaNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@PutMapping("/reservas/{id}")
	public ResponseEntity<?> update(@RequestBody Reserva reserva, @PathVariable Long id) {
		Reserva reservaActual = reservaService.findById(id);
		Reserva reservaUpdate = null;
		Map<String, Object> response = new HashMap<>();
		if (reservaActual == null) {
			response.put("mensaje", "Error no se pudo editar, La reserva ID: ".concat(id.toString().concat(" no existe en la base de datos!")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		try {
			reservaActual.setNombres(reserva.getNombres());
			reservaActual.setApellidos(reserva.getApellidos());
			reservaActual.setCedula(reserva.getCedula());
			reservaActual.setTelefono(reserva.getTelefono());
			reservaActual.setPais(reserva.getPais());
			reservaActual.setCiudad(reserva.getCiudad());
			reservaActual.setDireccion(reserva.getDireccion());
			reservaActual.setCorreo(reserva.getCorreo());
			reservaActual.setNumeroHabitaciones(reserva.getNumeroHabitaciones());
			reservaUpdate = reservaService.save(reservaActual);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar la reserva en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La reserva ha sido actualizado con éxito");
		response.put("reserva", reservaUpdate);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@DeleteMapping("/reservas/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		
		Map<String, Object> response = new HashMap<>();
		try {
			reservaService.delete(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar la reserva en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "La reserva ha sido eliminado con éxito!");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

}

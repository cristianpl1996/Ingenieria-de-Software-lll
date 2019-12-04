package utp.edu.co.perfiles_huespedes.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import utp.edu.co.perfiles_huespedes.models.entity.Empleado;
import utp.edu.co.perfiles_huespedes.models.entity.Huesped;
import utp.edu.co.perfiles_huespedes.models.services.IEmpleadoService;
import utp.edu.co.perfiles_huespedes.models.services.IHuespedService;

@Component
public class InfoAdicionalToken implements TokenEnhancer {

	@Autowired
	private IEmpleadoService empleadoService;

	@Autowired
	private IHuespedService huespedService;

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		Empleado empleado = empleadoService.findByUsername(authentication.getName());
		if (empleado == null) {
			Huesped huesped = huespedService.findByUsername(authentication.getName());
			Map<String, Object> info = new HashMap<>();
			info.put("Info adicional", "Hola que tal!".concat(authentication.getName()));
			info.put("Nombre", huesped.getNombres());
			info.put("Apellido", huesped.getApellidos());
			info.put("Cedula", huesped.getCedula());
			info.put("Tipo", huesped.getTipos());
			info.put("Telefono", huesped.getTelefono());
			((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
		} else {
			Map<String, Object> info = new HashMap<>();
			info.put("Info adicional", "Hola que tal! ".concat(authentication.getName()));
			info.put("Nombre", empleado.getNombres());
			info.put("Apellido", empleado.getApellidos());
			info.put("Cedula", empleado.getCedula());
			info.put("Tipo", empleado.getRoles());
			info.put("Telefono", empleado.getTelefono());
			((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
		}
		return accessToken;
	}

}

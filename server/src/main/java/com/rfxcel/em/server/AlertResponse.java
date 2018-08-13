package com.rfxcel.em.server;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AlertResponse {

	private final List<String> alerts;
	
	public AlertResponse(List<String> alerts) {
		super();
		this.alerts = alerts;
	}

	public List<String> getAlerts() {
		return alerts;
	}

	public String toString()
	{
		ObjectMapper mapper = new ObjectMapper();
		String json;
		try {
			json = mapper.writeValueAsString(this);
			return(json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return null;
	}
}

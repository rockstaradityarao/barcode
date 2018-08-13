package com.rfxcel.em.server;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MapResponse {

    private final LatLng center;
    private final int zoom;
	private final List<Device> devices;
	public MapResponse(LatLng center, int zoom, List<Device> devices) {
		super();
		this.center = center;
		this.zoom = zoom;
		this.devices = devices;
	}
	public LatLng getCenter() {
		return center;
	}
	public int getZoom() {
		return zoom;
	}
	public List<Device> getDevices() {
		return devices;
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

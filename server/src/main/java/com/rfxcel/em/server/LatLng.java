package com.rfxcel.em.server;

public class LatLng {
	private final Double lat;
	private final Double lng;

	public LatLng(Double lat, Double lng) {
		this.lat = lat;
		this.lng = lng;
	}
	
	public Double getLat() {
		return lat;
	}
	
	public Double getLng() {
		return lng;
	}
	
}

package com.rfxcel.em.server;

import java.util.List;

public class Device {
	private final LatLng position;
	private final String title;

	public Device(LatLng position, String title) {
		super();
		this.position = position;
		this.title = title;
	}
	
	public LatLng getPosition() {
		return position;
	}
	
	public String getTitle() {
		return title;
	}
}

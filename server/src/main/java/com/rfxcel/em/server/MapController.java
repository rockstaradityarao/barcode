package com.rfxcel.em.server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapController {

    @CrossOrigin
    @RequestMapping("/map")
    public MapResponse getMapData(/*@RequestHeader(value="authorization") String authorization*/) {
    	List<Device> devices = new ArrayList<Device>();
    	devices.add(new Device(new LatLng(37.317646d, -122.000404d), "Device 802273532"));
    	devices.add(new Device(new LatLng(37.315981d, -121.911650d), "Device 802238485"));
    	devices.add(new Device(new LatLng(37.375116d, -121.851069d), "Device 802456372"));
    	devices.add(new Device(new LatLng(37.422103d, -121.882439d), "Device 802564323"));
    	devices.add(new Device(new LatLng(37.493257d, -121.920611d), "Device 802485589"));
    	MapResponse mr = new MapResponse(
    			new LatLng(37.317646d, -122.000404d), 
    			10, 
    			devices
    			);
    	System.out.println("/map successful " + mr.toString());
        return mr;
    }
}
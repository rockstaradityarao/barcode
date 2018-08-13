package com.rfxcel.em.server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlertController {

    @CrossOrigin
    @RequestMapping("/alerts")
    public AlertResponse getMapData(/*@RequestHeader(value="authorization") String authorization*/) {
    	List<String> alerts = new ArrayList<String>();
       	alerts.add(new String("Device 802485589 - temperature is 50F outside of range 20F-40F"));
       	alerts.add(new String("Device 804555223 - tilt is back to normal"));
       	alerts.add(new String("Device 843444544 - shipment has deviated from route"));
       	alerts.add(new String("Device 844556543 - temperature is 90F outside of range 20F-80F"));
       	alerts.add(new String("Device 895847363 - shipment is back on route"));
    	AlertResponse ar = new AlertResponse(alerts);
    	System.out.println("/alerts successful " + ar.toString());
        return ar;
    }
}
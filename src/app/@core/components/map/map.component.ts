
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
//import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private map: MapService) { }
  
  ngOnInit() {
    
    this.map.initializeMap();
    //this.map.getCurrentLocation();
    this.map.setLocationButton();
    this.map.setLocations();
    this.map.setNavigationControl();
    //https://api.mapbox.com/directions-matrix/v1/mapbox/driving/A;B;C;D;E?sources=0&destinations=1;2;3;4&access_token=.
  }

}

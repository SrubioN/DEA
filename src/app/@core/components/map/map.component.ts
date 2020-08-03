
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { SendRequest }from '@core/services/sendrequest.service';

//import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public dir:any;
  constructor(private map: MapService,private rq: SendRequest) { }
  
  ngOnInit() {
    
    this.map.initializeMap();
    this.map.setLocationButton();
    this.map.setLocations();
    this.map.setNavigationControl();
    
    this.rq.send().subscribe(directions => {
      this.dir=directions;
      console.log(directions);
    } );

    

    //https://api.mapbox.com/directions-matrix/v1/mapbox/driving/A;B;C;D;E?sources=0&destinations=1;2;3;4&access_token=.
  }

}

import { SendRequest } from './../../services/sendrequest.service';
import { ReadExcelService } from './../../../read-excel.service';

import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { ConstantPool } from '@angular/compiler';
import { Observable } from 'rxjs';
import { SendRequestService } from '@core/services/sendrequest.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  archivo : any

  constructor(private map: MapService, private readexcelservice: ReadExcelService, public sendrequestservice : SendRequestService,) { }

  ngOnInit() {
    this.map.initializeMap();
    this.map.setLocationButton();
    this.map.setNavigationControl();
    this.readexcelservice.getJSON().subscribe(data => {
      this.map.setLocations(data);
    });
    this.map.setNavigationControl();

    this.sendrquest.send().subscribe(data =>{ 
      console.log(data)
    });
    //console.log(this.readexcelservice.get());
    //console.log(this.readexcelservice.getjson())

    
    
  
    
    
        
  }
  setArchivo(archivo){
    this.archivo = archivo;
  }

}

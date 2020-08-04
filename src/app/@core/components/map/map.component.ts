
import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
<<<<<<< Updated upstream
import { SendRequest }from '@core/services/sendrequest.service';

//import { HttpClientModule } from '@angular/common/http';

=======
import { ConstantPool, compileNgModule, ThrowStmt } from '@angular/compiler';
import { forkJoin } from "rxjs";
>>>>>>> Stashed changes

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
<<<<<<< Updated upstream
  public dir:any;
  constructor(private map: MapService,private rq: SendRequest) { }
  
  ngOnInit() {
    
    this.map.initializeMap();
=======

  archivo : any

  constructor(private map: MapService, private readexcelservice: ReadExcelService) { }

    ngOnInit() {
    this.map.buildMap();
>>>>>>> Stashed changes
    this.map.setLocationButton();
    this.map.setLocations();
    this.map.setNavigationControl();
    
    this.rq.send().subscribe(directions => {
      this.dir=directions;
      console.log(directions);
    } );

<<<<<<< Updated upstream
    

    //https://api.mapbox.com/directions-matrix/v1/mapbox/driving/A;B;C;D;E?sources=0&destinations=1;2;3;4&access_token=.
=======
    //console.log(this.archivo)


  }
  async this.readexcelservice.get_excel();{
    await  this.readexcelservice.set_excel();
    //this.setArchivo(this.readexcelservice.get_excel());
  //  console.log(this.archivo);
  }


  setArchivo(archivo);{
    this.archivo = archivo;
>>>>>>> Stashed changes
  }
    


}

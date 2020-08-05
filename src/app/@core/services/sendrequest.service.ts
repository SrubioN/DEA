import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private http: HttpClient) { }

 
  getPath() {
    return this.http.get<any>('/rnc-registro/resolucion');
  }
  
  send() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
      headers: headers
    };
    let coordinates=new HttpParams().set('coordinates','2.344003,48.85805;2.34675,48.85727;2.34868,48.85936;2.34955,48.86084;2.34955,48.86088;2.349625,48.86102;2.34982,48.86125')
    var token = "pk.eyJ1Ijoic2ViYWxpbmRvIiwiYSI6ImNrZDN2a3FyNjA5M2IyeW9kMGRqYTNza2YifQ.HTUuorATOtxXxT_r3BwCDA"
    console.log("llegue");
    console.log(this.http.post<any>("https://api.mapbox.com/matching/v5/mapbox/driving?access_token="+token, coordinates, options));
    return this.http.post<any>("https://api.mapbox.com/matching/v5/mapbox/driving?access_token="+token, coordinates, options);
  }

}
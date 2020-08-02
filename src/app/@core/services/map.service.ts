import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';
import { LocationStrategy } from '@angular/common';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Person } from './person';
//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  } 
  
  
  setNavigationControl(){
    this.map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}), 'top-left');
    //this.map.addControl(new MapboxGeocoder({accessToken:mapboxgl.accessToken}));
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    }));

  }
  
  public initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }

    this.buildMap()

  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    
    
    }
  
  
    setLocationButton(){
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }));
  }
  
  
  setLocations(){  
    var location = new Location(); 
    var locs = new Array<Location>(); 
    location.setName("COLEGIO MARIA AUXILIADORA");
    location.setLatitude(-33.03128055);
    location.setLongitude(-71.63788329);
    locs.push(location);
    this.setMarks(locs);
    location.setName("COLEGIO SAN VICENTE");
    location.setLatitude(-33.03168244);
    location.setLongitude(-71.63563761);
    locs.push(location);
    this.setMarks(locs);
  }
  
  
  setMarks(locs)
  {
    for(var i = 0;i< locs.length;i++){
      var marker = new mapboxgl.Marker()
      .setLngLat([locs[i].getLongitude(), locs[i].getLatitude()])
      .addTo(this.map); // add the marker to the map
    }
  }
  shortPath(locs){
  //  for(var i = 0; i < )
  
  }
}



export class Location {
  name: String;
  latitude: number;
  longitude: number;

  setName(name){
    this.name = name;
  }
  setLatitude(latitude){
    this.latitude = latitude;
  }
  getLatitude(){
    return this.latitude;
  }
  setLongitude(longitude){
    this.longitude = longitude;
  }
  getLongitude(){
    return this.longitude;
  }

}

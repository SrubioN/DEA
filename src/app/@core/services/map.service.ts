import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.

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
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling'
    });
    this.map.addControl(directions,"top-left");
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    }));
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    }); 
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
  
  
  
    setLocationButton(){
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }));
  }
  
  
  setLocations(data){
    //console.log(data.Nombre);
    var cantPlaces = 200;
    var locs = new Array<Location>();
    for(var i = 0;i< cantPlaces-1;i++){
      var location = new Location();
      location.setLatitude(parseFloat(data.Latitud[i]));
      location.setLongitude(parseFloat(data.Longitud[i]));
      locs.push(location);
      this.setMark(location.getLongitude(),location.getLatitude());
    }
    console.log(locs);

  }
  
  
  setMark(lng,lat){
      //console.log(lat,lng);
      var marker = new mapboxgl.Marker()
      .setLngLat([lng,lat])
      .addTo(this.map); // add the marker to the map
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

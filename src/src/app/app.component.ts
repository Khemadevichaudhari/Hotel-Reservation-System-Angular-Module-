import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
  map!: google.maps.Map;
  // Cordinates for radison blue
  lat : any = 21.1059361; 
  lng : any = 79.067477;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }
  /* show_place(){
    this.lat = document.getElementById('long')
    this.lng = document.getElementById('lati')
    
    this.lat = this.lat.value
    this.lng = this.lng.value
    console.log(this.lat.value, this.lng.value);

    this.coordinates = new google.maps.LatLng(this.lat, this.lng);

    this.mapOptions.center = this.coordinates;
    
    this.mapInitializer();
  } */
 }

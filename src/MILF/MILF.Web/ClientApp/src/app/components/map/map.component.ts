/// <reference types="@types/googlemaps" />

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 40.712776, lng: -74.005974 }, // Replace with your desired latitude and longitude
      zoom: 12, // Set the initial zoom level of the map
    };

    new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }
}
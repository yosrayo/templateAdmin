import { Component, OnInit , AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {
map;
  constructor() { }

  ngAfterViewInit() {
    this.createMap();
  }
  createMap(){
    const parcThabor={
      lat:48.114384,
      lng:-1.669494,
    };
    const zoomLevel=12;
    this.map=L.map('map' ,{
      center:[parcThabor.lat , parcThabor.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
  }
}

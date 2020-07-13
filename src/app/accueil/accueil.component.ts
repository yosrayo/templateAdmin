import { Component, OnInit , AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {
map;
nameUser = localStorage.getItem('name')
admin:string;
liv:string;
n:string;
p:string;
  constructor() { }
  ngOnInit() {
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
  }
  ngAfterViewInit() {
    this.createMap();
  }
  createMap(){
    const parcThabor={
      lat:36.92670274069781,
      lng:9.949335250421933,
    };
    const zoomLevel=5;
    this.map=L.map('map' ,{
      center:[parcThabor.lat , parcThabor.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 5,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
  }
  c() {
    if(localStorage.getItem('name') === '') {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    window.location.replace("login");
    localStorage.setItem("name","")
  }
}

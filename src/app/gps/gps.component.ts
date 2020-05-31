import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit {
  latitude = 36.8540568;
  longitude = 10.207159;
  constructor(private agm : AgmCoreModule) { }

  ngOnInit() {
  }
  onChoseLocation(event){
   this.latitude= event.coords.lat;
   this.longitude= event.coords.lng;
  }
}

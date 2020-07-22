import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { getCurrencySymbol } from '@angular/common';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
 //char circle
  doughnutChartLabels: Label[] = ['Vetement', 'Produit Beauté', 'Alimentation' ,'Produit Bébé'];
  doughnutChartData: MultiDataSet = [
    [55, 15, 10 , 13]
  ];
  doughnutChartType: ChartType = 'doughnut'
  barChartOptions: ChartOptions = {
    responsive: true,
  };
   //charts bar
  barChartLabels: Label[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ,'Dimande'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 40], label: 'Revenu par jour' }
  ];


  constructor() { }

  ngOnInit() {
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));
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
    localStorage.setItem("name","");
    localStorage.removeItem("grade");
  }

}

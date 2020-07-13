import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
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
  

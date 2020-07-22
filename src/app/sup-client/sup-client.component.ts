import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-sup-client',
  templateUrl: './sup-client.component.html',
  styleUrls: ['./sup-client.component.css']
})
export class SupClientComponent implements OnInit {
  list = [] as any ;
  nameUser = localStorage.getItem('name')
  admin:string;
  liv:string;
  n:string;
  p:string;
  grade:String="user";
  constructor( private userService : UserService) { }

  ngOnInit() {
    
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));


    this.grade="user";
    
    this.userService .getUserGrade(this.grade).subscribe((res) => {
      this.list = res;
    
    });
  }
  onDelete(_id: string) {
    if (confirm('Voulez-vous vraiment supprimer cet enregistrement ?') === true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.ngOnInit();
      });
    }
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

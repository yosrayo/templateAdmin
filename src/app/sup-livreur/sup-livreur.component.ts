import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
@Component({
  selector: 'app-sup-livreur',
  templateUrl: './sup-livreur.component.html',
  styleUrls: ['./sup-livreur.component.css']
})
export class SupLivreurComponent implements OnInit {
  list = [] as any ;
  user:User;
  admin:string;
liv:string;
n:string;
p:string;
h: any;
grade:String="livreur";
  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.grade="livreur";
    this.admin = localStorage.getItem("admin");
    this.liv = localStorage.getItem("liv");
    this.n=JSON.parse(localStorage.getItem('nom'));
    this.p=JSON.parse(localStorage.getItem('prenom'));

      this.userService .getUserGrade(this.grade).subscribe((res) => {
        this.list = res;
      
      });
      
  }
  delete(user:User): void {
    this.userService.delete(user).subscribe();
    

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

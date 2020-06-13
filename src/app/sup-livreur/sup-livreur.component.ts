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
  constructor(private userService : UserService ) { }

  ngOnInit() {
   
    this.userService .getUsers().subscribe((res) => {
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
  
}

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
 
  constructor( private userService : UserService) { }

  ngOnInit() {
  
    this.userService .getUsers().subscribe((res) => {
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


}

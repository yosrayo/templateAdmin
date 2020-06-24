import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-commande-liv',
  templateUrl: './commande-liv.component.html',
  styleUrls: ['./commande-liv.component.css']
})
export class CommandeLivComponent implements OnInit {
list : User[];
  constructor(private userService : UserService ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.list = res;
      console.log("listCommande",this.list);
      
  
    });
  }

}

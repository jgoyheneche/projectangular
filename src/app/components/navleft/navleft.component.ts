import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navleft',
  templateUrl: './navleft.component.html',
  styleUrls: ['./navleft.component.css']
})
export class NavleftComponent implements OnInit {


  constructor(public auth: AuthService) {   
    
  }

  ngOnInit(): void {      
   
  }

  


}

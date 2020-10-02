import { Component, OnInit } from '@angular/core';

import {Animal1Service} from '../animal1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any
	
  show: boolean;
  constructor(private animalService: Animal1Service) {
   this.user=this.animalService.userFromService.uname;
   if(sessionStorage.getItem('username'))
   {
   this.show=true;
   }
   else
   {
   this.show=false;
   }
  }


  ngOnInit() {
  
   console.log("home " + sessionStorage.getItem('username'));
  }
  //getAnimals(): void
//  {
  //this.animalService.getAnimals().subscribe(anima => this.anima = anima.slice(1,5));
  //}



}

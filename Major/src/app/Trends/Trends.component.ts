import { Component , OnInit } from '@angular/core';
import {Animal1Service} from '../animal1.service';

@Component({
  selector: 'app-Trends',
  templateUrl: './Trends.component.html',
  styleUrls: ['./Trends.component.css']
})
export class TrendsComponent implements OnInit{
 
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

  ngOnInit(){}
  
  }

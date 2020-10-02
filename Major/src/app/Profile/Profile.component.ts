import { Component, OnInit } from '@angular/core';
import {Animal1Service} from '../animal1.service';
@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  login: boolean;
  users={
  username:'',
  uname:'',
  age: '',
  gender:'',
}
user:any
show: boolean;
  constructor(private animalService: Animal1Service) { 
  this.user=this.animalService.userFromService.uname;
  this.users.uname=this.animalService.userFromService.username;
  this.users.age=this.animalService.userFromService.username;
  this.users.username=this.animalService.userFromService.username;
  this.users.gender=this.animalService.userFromService.username;
   if(sessionStorage.getItem('username'))
   {
   this.show=true;
   }
   else
   {
   this.show=false;
   }
  this.login=true;
  this.animalService.dataFromService=this.login;
  
  }

  ngOnInit() {
    this.profile();
  }

  profile()
  {
  this.animalService.onProfile(sessionStorage.getItem('username')).subscribe(users => {
  this.users=users; 
  this.animalService.userFromService=this.users;
  });
  }
  

  logout()
  {
  this.login=false;
  this.animalService.dataFromService=this.login;
  sessionStorage.clear();
  }
  }



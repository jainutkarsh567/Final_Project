import { Component, OnInit,Input } from '@angular/core';
import { Animal1Service }  from '../animal1.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {
 
  constructor(
  private route: ActivatedRoute,
  private animalService: Animal1Service,
  private location: Location
) {
   sessionStorage.getItem('username');
   console.log(sessionStorage.getItem('username'));
 }

 user: any
users={
  username:'',
  uname:'',
  age: '',
  gender:'',
  }
 
 blogger={
 place: '',
 description: '',
 blog: ''
 }

 

  ngOnInit() { this.blogging();
  
  }
goBack(): void {
  this.location.back();
}

blogging()
{
  this.animalService.onblogging(sessionStorage.getItem('username')).subscribe(users => {
  this.users=users; 
  this.animalService.userFromService=this.users;
  });
}

onBlog()
{
 console.log('kuch to aa');
 console.log(this.blogger.place);
 console.log(this.blogger.description);
 console.log(this.blogger.blog);
  this.animalService.onBloging(this.blogger).subscribe(blogger => {
  this.blogger=blogger;
  console.log(this.blogger.place); 
 });
 }
}


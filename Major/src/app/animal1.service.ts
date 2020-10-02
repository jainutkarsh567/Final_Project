
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './User';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class Animal1Service {
user: any
s:any
 dataFromService: any
 userFromService={
 username:'',
  uname:'',
  age: '',
  gender:'',
 }

  constructor(public http : HttpClient) {
   }
  
  getDetails():Observable <any>
  {
  return this.http.get('http://localhost:8080/WILD1/Add?').pipe(map(res => res));
  }
  addUser(user): Observable <any>{
   
  return this.http.post('http://localhost:8080/WILD1/Add',user).pipe(map(res => res));
  
  }
  onCheck(user): Observable<any>{
  return this.http.post('http://localhost:8080/WILD1/Login?',user).pipe(map(res => res));
  }
  onSign_Up(user) : Observable<any>
  {
   return this.http.post('http://localhost:8080/WILD1/Add',user).pipe(map(res => res));
  }
  forgotPassword(user) : Observable<any>
  {
  return this.http.post('http://localhost:8080/WILD1/Forgot?',user).pipe(map(res => res));
  }

  onProfile(user) : Observable<any>
  {
  return this.http.post('http://localhost:8080/WILD1/Profile?',user).pipe(map(res => res));
  }
  onBloging(user) : Observable<any>
  {
    return this.http.post('http://localhost:8080/WILD1/Blog?',user).pipe(map(res => res));
  
  }
  onblogging(user) : Observable<any>
  {
    return this.http.post('http://localhost:8080/WILD1/Blog?',user).pipe(map(res => res));
  }
}

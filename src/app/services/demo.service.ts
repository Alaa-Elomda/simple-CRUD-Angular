import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  constructor(private myUser: HttpClient) { }
  private BaseURL = "http://localhost:3000/users";
  //Methods

  // 1)Get All Students
  getAllUsers(){
    return this.myUser.get(this.BaseURL);
  }

  // 2)Get Student By ID
  getUserByID(id:any){
    return this.myUser.get(`${this.BaseURL}/${id}`);
  }


  updateUser(id:any,data:any){
    return this.myUser.patch(`${this.BaseURL}/${id}`,data);
  }

  AddNewUser(newUser:any){
    return this.myUser.post(this.BaseURL, newUser);
  }

  DeleteUser(id:any){
    return this.myUser.delete(`${this.BaseURL}/${id}`);
  }


}

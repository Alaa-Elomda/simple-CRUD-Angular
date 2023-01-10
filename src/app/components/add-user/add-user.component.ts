import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private myService: DemoService){

  }

  Add(name:any, age:any, phone:any ,city:any, BuildNo:any, email:any ){
    let user = {name, age, phone, city,BuildNo, email};
    this.myService.AddNewUser(user).subscribe();
  }

}

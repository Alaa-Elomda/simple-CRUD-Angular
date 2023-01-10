import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import{ActivatedRoute, Router} from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  ID=1;
  user:any;
  constructor(private router:Router, myActivated:ActivatedRoute,private myService:DemoService){
    this.ID= myActivated.snapshot.queryParams["id"];
  }
  form = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
    phone: new FormControl(null),
    city:new FormControl(null),
    BuildNo:new FormControl(null),
    email: new FormControl(null,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))
  });
  ngOnInit(): void {
    this.myService.getUserByID(this.ID).subscribe(
      {
        next:(res)=>{
          this.user = res;
          this.form.controls['name'].setValue(this.user.name);
          this.form.controls['age'].setValue(this.user.age);
          this.form.controls['phone'].setValue(this.user.phone);
          this.form.controls['city'].setValue(this.user.city);
          this.form.controls['BuildNo'].setValue(this.user.BuildNo);
          this.form.controls['email'].setValue(this.user.email);

        },
        error(err){console.log(err)}
      }
    );

  }
  Update(){
    this.myService.updateUser(this.ID,{
      name:this.form.controls["name"].value,
        age:this.form.controls["age"].value,
        phone:this.form.controls["phone"].value,
        city:this.form.controls["city"].value,
        BuildNo:this.form.controls["BuildNo"].value,
        email:this.form.controls["email"].value,
    }).subscribe(
      {
        next:(res)=>{
        },
        error(err){console.log(err)}
      }
    )
    this.router.navigate(['/']);
  }

}

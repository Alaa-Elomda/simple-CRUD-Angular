import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router,private myService:DemoService){}
  users:any;
  
  //Calling Api [ngOnInit]
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe({
      next: (res)=>{
        this.users = res;
      },
      error(err){console.log(err)}
    })
  }
  Update(event:any,id:any){
    this.router.navigateByUrl('/update?id='+id);
  }
  Delete(event:any,id:any){
    this.myService.DeleteUser(id).subscribe(
      {
        next:(res)=>{
        }
        ,error(err){console.log(err)}
      }
    );
    window.location.reload();
}
}
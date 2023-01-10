import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ID=0;
  user:any;
  constructor(myActivated:ActivatedRoute,private myService:DemoService){
    this.ID = myActivated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.getUserByID(this.ID).subscribe(
      {
        next:(res)=>{
          this.user = res;
        },
        error(err){console.log(err)}
      }
    )
  }

}

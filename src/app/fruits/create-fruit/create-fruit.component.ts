import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css']
})
export class CreateFruitComponent implements OnInit {

  createpro:any;
  constructor(public _srvc:FruitsService,public _active:ActivatedRoute) { }

  ngOnInit(): void {
  }

    createdfile(create:any){
      let createrecord={
        p_name:create.value.p_name,
        p_id:create.value.p_id,
        p_cost:create.value.p_cost,
        p_availability:create.value.p_availability,
        p_details:create.value.p_details,
        p_category:create.value.p_category,
        p_image:create.value.p_image
      }
      this._srvc.createfruit(createrecord).subscribe(informs=>{
        this.createpro=informs;
      });
    }
     
  }
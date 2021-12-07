import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-update-fruit',
  templateUrl: './update-fruit.component.html',
  styleUrls: ['./update-fruit.component.css']
})
export class UpdateFruitComponent implements OnInit {

  prod:any;
  product:any;
  updateproduct:any;
constructor(public _srvc:FruitsService, public _active:ActivatedRoute) { }

ngOnInit(): void {

  this._active.params.subscribe(data=>{
    this.prod=data.id;
    console.log(data.id);
  });

  this._srvc.getViewfruit(this.prod).subscribe(info=>{
    this.product=info;
    console.log(this.product);
  });
}

Updatedfile(update:any){

  console.log("from function...." + update.value);
  let updaterecord={
    p_name:update.value.p_name,
    p_id:this.product,
    p_cost:update.value.p_cost,
    p_availability:update.value.p_availability,
    p_details:update.value.p_details,
    p_category:update.value.p_category,
    p_image:update.value.p_image
  }
  console.log("testing..." + updaterecord);
  this._srvc.getupdate(this.product,updaterecord).subscribe(informs=>{
    this.updateproduct=informs;
  });
}
}

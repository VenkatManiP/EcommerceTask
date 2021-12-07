import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-viewfruitbycategory',
  templateUrl: './viewfruitbycategory.component.html',
  styleUrls: ['./viewfruitbycategory.component.css']
})
export class ViewfruitbycategoryComponent implements OnInit {

  cat:any;
  listproduct:any;
  constructor(public _active:ActivatedRoute,public _srvc:FruitsService) { }

  ngOnInit(): void {
      this._active.params.subscribe(data=>{
        this.cat=data.id;
        console.log(data.id);
        
      });
      this._srvc.getViewByCategory(this.cat).subscribe(data=>{
        this.listproduct=data;
        console.log(data);
        
      }); 
  }
}


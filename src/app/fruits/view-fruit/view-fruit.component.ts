import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-view-fruit',
  templateUrl: './view-fruit.component.html',
  styleUrls: ['./view-fruit.component.css']
})
export class ViewFruitComponent implements OnInit {

  view:any;
  viewlist: any;
  constructor(public _srvc:FruitsService,public _active:ActivatedRoute) { }
  
  ngOnInit(): void {

    this._active.params.subscribe(data => {
      this.view=data.id; 
    });

    this._srvc.getViewfruit(this.view).subscribe(details =>{
      this.viewlist=details;
      console.log(details);
      
    });
  }

}

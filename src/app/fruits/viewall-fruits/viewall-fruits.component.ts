import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-viewall-fruits',
  templateUrl: './viewall-fruits.component.html',
  styleUrls: ['./viewall-fruits.component.css']
})
export class ViewallFruitsComponent implements OnInit {

  fruitsList:any;
  constructor(private _srvc: FruitsService) { }

  ngOnInit(): void {

    this._srvc.getAllfruits().subscribe(data =>{
      this.fruitsList=data;
      console.log(this.fruitsList);
    });
  }

}

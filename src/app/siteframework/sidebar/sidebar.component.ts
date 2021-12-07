import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/fruits.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  CatagorieList: any;
  constructor(private _srvc: FruitsService) { }

  ngOnInit(): void {
    this._srvc.getCatagorie().subscribe(data =>{
      this.CatagorieList=data;
    });

  }

}

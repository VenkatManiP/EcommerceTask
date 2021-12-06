import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits.component';
import { ViewallFruitsComponent } from './viewall-fruits/viewall-fruits.component';
import { ViewFruitComponent } from './view-fruit/view-fruit.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { UpdateFruitComponent } from './update-fruit/update-fruit.component';
import { DeleteFruitComponent } from './delete-fruit/delete-fruit.component';


@NgModule({
  declarations: [
    FruitsComponent,
    ViewallFruitsComponent,
    ViewFruitComponent,
    CreateFruitComponent,
    UpdateFruitComponent,
    DeleteFruitComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }

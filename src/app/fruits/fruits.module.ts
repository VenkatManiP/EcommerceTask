import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits.component';
import { ViewallFruitsComponent } from './viewall-fruits/viewall-fruits.component';
import { ViewFruitComponent } from './view-fruit/view-fruit.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { UpdateFruitComponent } from './update-fruit/update-fruit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FruitsComponent,
    ViewallFruitsComponent,
    ViewFruitComponent,
    CreateFruitComponent,
    UpdateFruitComponent,
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FruitsModule { }

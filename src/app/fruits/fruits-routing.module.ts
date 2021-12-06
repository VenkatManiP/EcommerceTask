import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { FruitsComponent } from './fruits.component';
import { UpdateFruitComponent } from './update-fruit/update-fruit.component';
import { ViewFruitComponent } from './view-fruit/view-fruit.component';
import { ViewallFruitsComponent } from './viewall-fruits/viewall-fruits.component';

const routes: Routes = [
  { path: '', component: ViewallFruitsComponent },
  { path: 'create-Fruits', component: CreateFruitComponent },
  { path: 'update-Fruits/:id', component: UpdateFruitComponent },
  { path: 'view-Fruits/:id', component: ViewFruitComponent },
  { path: 'viewallFruits', component:ViewallFruitsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }

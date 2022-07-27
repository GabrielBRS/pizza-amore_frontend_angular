import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaDoceComponent } from './pizza-doce.component';

@NgModule({
  imports: [
    CommonModule
  ],exports:[PizzaDoceComponent],
  declarations: [PizzaDoceComponent]
})
export class PizzaDoceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaSalgadaComponent } from './pizza-salgada.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PizzaSalgadaComponent],
  declarations: [PizzaSalgadaComponent]
})
export class PizzaSalgadaModule { }

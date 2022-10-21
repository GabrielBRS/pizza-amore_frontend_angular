import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './display/commerce/home-page/home-page.component';
import { PageNotFoundComponent } from './display/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

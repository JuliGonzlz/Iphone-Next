import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesIphoneComponent } from './phones-iphone/phones-iphone.component';
import { PhonesAboutComponent } from './phones-about/phones-about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: PhonesIphoneComponent
  },
  {
    path: 'about',
    component: PhonesAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

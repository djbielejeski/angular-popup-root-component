import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildComponent} from './child-component/child.component';

const routes: Routes = [
  {
    path: 'home',
    component: ChildComponent
  },
  // Wildcard route
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

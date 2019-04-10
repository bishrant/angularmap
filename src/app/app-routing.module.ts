import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsrimapComponent } from './components/esrimap/esrimap.component';

const routes: Routes = [{
  path: 'map', component: EsrimapComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

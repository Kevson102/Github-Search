import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralComponent } from './central/central.component';
import { LandingComponent } from './components/landing/landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'landing', component: LandingComponent},
  {path: 'central', component: CentralComponent},
  { path: '', redirectTo:"landing", pathMatch:"full"},
  { path:'**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

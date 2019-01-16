import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component:EntrepriseComponent},
  {path:'entreprise',component:EntrepriseComponent},
  {path:'entreprise/:id',component:EntrepriseDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EntrepriseComponent,EntrepriseDetailComponent,
  ]

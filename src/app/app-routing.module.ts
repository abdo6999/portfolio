import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ProjectComponent } from './pages/project/project.component';
import { MeComponent } from './pages/me/me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:MeComponent,pathMatch : 'full'},
  {path:'portfolio',component:ProjectComponent},
  {path:'contact-me',component:ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "aboutus", component:AboutusComponent},
  {path: "profile", component:ProfileComponent,canActivate:[AuthGuard]},
  {path: "logIn", component:LogInComponent, 
  children: [{path: "register", component:RegisterComponent}]},
  {path: "register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TestingComponent } from './components/testing/testing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './components/resume/resume.component';


const routes: Routes = [
  {path: 'testing', component: TestingComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestingComponent,HomeComponent,AboutComponent,NavbarComponent,ResumeComponent]
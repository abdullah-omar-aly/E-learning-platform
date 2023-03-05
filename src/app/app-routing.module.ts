import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';

const routes: Routes = [ //first match wins strategy
  // {
  //   path: '', component: MainLayoutComponent, children: [
  //     { path: '', redirectTo: '/home', pathMatch: 'full' },
  //     { path: 'home', component: HomePageComponent },
  //     { path: 'courses', component: CoursesPageComponent },
  //     { path: 'courses/:courseId', component: CourseDetailsPageComponent },
  //     { path: 'about', component: AboutPageComponent },
  //   ]
  // },
  {path: '' , redirectTo: '/courses' , pathMatch: 'full'} ,
  {path: 'courses' , component: CoursesPageComponent}
  // { path: 'classroom', component: ClassroomComponent },
  // { path: '**', component: NotFound404PageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

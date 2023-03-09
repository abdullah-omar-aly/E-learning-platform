import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';
import { AccountPageComponent } from './Pages/account-page/account-page.component';
import { CourseDetailsPageComponent } from './Pages/course-details-page/course-details-page.component';
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
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesPageComponent, pathMatch: 'full' },
      { path: 'courses/:courseId', component: CourseDetailsPageComponent },
    ]
  },

  {
    path: 'account', component: AccountPageComponent, children: [
      { path: 'sign-in', component: LoginFormComponent },
      { path: 'sign-up', component: SignUpFormComponent }

    ]
  }
  // { path: 'classroom', component: ClassroomComponent },
  // { path: '**', component: NotFound404PageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

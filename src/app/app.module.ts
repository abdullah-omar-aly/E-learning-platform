import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './Components/header/header.component';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';


import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CourseDetailsPageComponent } from './Pages/course-details-page/course-details-page.component';
import { CourseCardComponent } from './Components/course-card/course-card.component';
import { AccountPageComponent } from './Pages/account-page/account-page.component';
import { RatingComponent } from './Components/rating/rating.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesPageComponent,
    CourseDetailsPageComponent,
    CourseCardComponent,
    AccountPageComponent,
    RatingComponent,
    SignUpFormComponent,
    LoginFormComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    HttpClientModule ,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule ,
    MatTabsModule ,
    FormsModule ,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

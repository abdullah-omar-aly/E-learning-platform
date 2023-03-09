import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import ICourse from 'src/app/models/ICourse';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.scss']
})

export class CourseDetailsPageComponent implements OnInit {
  courseId: string = ''
  courseData: ICourse = {} as ICourse
  constructor(
    private _courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {

    //when navigate to same components , wil not reload component
    //even if theres's changes in the route parameters
    // use this method if you will not change the parameter from the same component
    this.courseId = this.activatedRoute.snapshot.paramMap.get('courseId') as string

    this._courseService.getCourseById(this.courseId)
      .subscribe(data => this.courseData = data)
    console.log('activate route', this.activatedRoute)

    //subscibe on paramMap observable => to check if the url parameter chaange
    //use this method if you will change the parameter from the same component
    //example (previous product & next product)
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.courseId = paramMap.get('courseId') as string
    //  this._courseService.getCourseById(this.courseId)
    //   .subscribe(data => this.courseData = data)
    // })
  }
  goBack() {
    this.location.back()
  }
}

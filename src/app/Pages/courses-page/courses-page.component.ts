import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ICourse from 'src/app/models/ICourse';
import { CourseService } from 'src/app/Services/course.service';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = []
  limit = 5

  constructor(
    private _courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }



  trackByfn(index: number, item: ICourse): string { return item.id; }

  ngOnInit(): void {
    // this._courseService.getAllCourses()
    //   .subscribe(data => this.courses = data)

    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (params['search']) {
    //     console.log('search')
    //     this.searchCourses(params['search'])
    //   } else {
    //     console.log('blank')
    //   }

    // })


    this._courseService.getCourses(1, 5)
      .subscribe(data => {
        this.courses = data
      }

      )
  }


  searchCourses(searchQuery: string) {

    // const shadowUrl = `courses${searchQuery ? "?search=" + searchQuery : ''}`
    // this.router.navigateByUrl(shadowUrl, { skipLocationChange: false })
    // this._courseService.searchCourses(searchQuery)
    //   .subscribe(data => this.courses = data)

  }

  onScrollDown(ev: any) {
    console.log('bottom ')
    const page = (this.courses?.length / this.limit) + 1
    this._courseService.getCourses(page, this.limit)
      .subscribe(data => {
        this.courses?.push(...data)
        console.log(this.courses.length)
      })

  }


}

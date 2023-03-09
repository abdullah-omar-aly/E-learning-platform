import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICourse from '../models/ICourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
    
   }

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('http://localhost:3000/courses')
  }

  getCourseById(id:string): Observable<ICourse>{
    return this.http.get<ICourse>(`http://localhost:3000/courses/${id}`)
  }

  searchCourses(query: string):Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`http://localhost:3000/courses?q=${query}`)
  }

}

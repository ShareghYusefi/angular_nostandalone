import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = ['Math', 'Science', 'English'];
  constructor() {}

  getCourses() {
    return this.courses;
  }
}

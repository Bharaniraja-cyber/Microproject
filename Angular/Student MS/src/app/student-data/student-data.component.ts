import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {
  student : Student
  result : any
  studentArr :Student[]
  flag:Boolean
  constructor(private service : StudentService){
    this.student = new Student()
    this.result=" "
    this.studentArr = []
    this.flag= false
  }

    findAll(){
      this.studentArr=this.service.findAll()
      this.flag = true
  }

}

import { Component } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student : Student
  result : any
  studentArr :Student[]
  flag:Boolean
  constructor(private service : StudentService){
    this.student = new Student();
    this.result=""
    this.studentArr = []
    this.flag= false
  }
    insertStudent(data: any){
      this.student.id = data.stuId;
      this.student.stuName = data.stuName;
      this.student.stuDob = data.stuDob;
      this.student.dept = data.dept;
      this.student.email = data.email;
      this.result = this.service.insertStudent(this.student)
    }

    updateStudent(data: any){
      this.student.id = data.stuId;
      this.student.stuName = data.stuName;
      this.student.stuDob = data.stuDob;
      this.student.dept = data.dept;
      this.student.email = data.email;
      this.result = this.service.updateStudent(this.student)
    }

    deleteStudent(data:any){
      this.result = this.service.deleteStudent(data.stuId)
    }

    findStudent(data:any){
      this.student = this.service.findStudent(data.stuId)
      this.result = "Student ID : "+this.student.id+"\n"+"Student Name :"+this.student.stuName+"\n"+"DOB :"+ this.student.stuDob+"\n"+"Department :"+this.student.dept+"\n"+"Student Email :"+this.student.email
    }

    findAll(){
        this.studentArr=this.service.findAll()
        this.flag = true
    }
}

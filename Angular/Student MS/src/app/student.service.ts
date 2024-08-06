import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string
  student : Student
  studentArr : Student[]
  flag:Boolean
  constructor(private http : HttpClient) {
    this.url = "http://localhost:3004/Student"
    this.student = new Student()
    this.studentArr = []
    this.flag=false
   }

   insertStudent(student:Student){
    this.http.post<Student>(this.url,student).subscribe()
    return "Student is registered"
   }

   updateStudent(student:Student){
    this.http.put<Student>(this.url+"/"+student.id, student).subscribe()
    return "updated Student data"
   }

   deleteStudent(stuId:number){
    this.http.delete<Student>(this.url+'/'+stuId).subscribe()
    return "Deleted Student Data"
   }

   findStudent(stuId:number){
    this.http.get<Student>(this.url+"/"+stuId).subscribe(data => this.student = data )
    return this.student
   }

   findAll(){
    this.http.get<Student[]>(this.url).subscribe(data => this.studentArr = data)
    return this.studentArr
   }
}

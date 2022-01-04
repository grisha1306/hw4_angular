import {Component, HostListener, OnInit} from "@angular/core";
import {Student} from "./model/student";
import {PopupService} from "@clementvh/angular-popup";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  id : any = 0;
  fName : any;
  lName: any;
  patronymic: any;
  birthDay:any;
  average:any;
  searchText: any;
  minFilterAver: number = 0;
  maxFilterAver: number = 0;
  minFilterDate: string = '';
  maxFilterDate: string = '';
  student: Student = new Student(0,'','','','0', 0);
  filteredItems : Array<Student>;
  bodyText: string = '';

  students: Array<Student> = [
    new Student(0,"Pupkin", "Ivan", "Vasilievich", '1996-05-18', 4.1),
    new Student(1,"Ivanov", "Ivan", "Ivanovich", '1996-05-26', 4.2),
    new Student(2,"Shumilov", "Grigoriy", "Alekseevich", '1996-06-13', 4.8)
  ]

  constructor(){
    this.id = 2;
    this.filteredItems = this.students;
  };

  addStudent() : void {
    this.id = this.filteredItems.length;
    this.student = new Student(this.id, this.lName, this.fName, this.patronymic, this.birthDay, this.average);
    this.students.push(this.student);
  }


  deleteStudent(id: number) : void {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students.splice(i, 1);
      }
    }
  }

  editInForm(student : Student){
    this.id = student.id;
    this.fName = student.name;
    this.lName = student.surname;
    this.patronymic = student.patronymic;
    this.birthDay = student.birthDay;
    this.average = student.average;
  }

  editStudent() : void {
    this.student= this.filteredItems[this.id] ;
    this.student.name = this.fName;
    this.student.surname = this.lName;
    this.student.patronymic = this.patronymic;
    this.student.birthDay = this.birthDay;
    this.student.average = this.average;
    this.filteredItems[this.id] = this.student;
  }


  filterByAverage() {
    this.filteredItems = [];

    if(this.maxFilterAver != null && this.minFilterAver != null && this.maxFilterDate != null && this.minFilterDate != null){
      this.students.forEach(element => {
        if( this.minFilterAver <= element.average && this.maxFilterAver >= element.average
          && Date.parse(this.minFilterDate) <= Date.parse(element.birthDay) && Date.parse(this.maxFilterDate) >= Date.parse(element.birthDay)
          ){
          this.filteredItems.push(element);
        }
      });
    }else{
      this.filteredItems = this.students;
    }
    // if ( this.maxFilterAver === 0 && this.minFilterAver === 0 && this.maxFilterDate != null && this.minFilterDate != null ) {
    //   this.filteredItems = this.students;
    // }
  }

  viewAll(): void {
    // this.filteredItems = [];
    this.filteredItems = this.students;
  }

  ngOnInit() {
  }

}

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("txtName") txtName!:ElementRef;
  // = new ElementRef(null);

  title = '5 INF B 2021/2022';

  studentRepository = [
    { "name": "Ettore Esposito", "hobby": "Karate", "gender": "M", "isPro": false },
    { "name": "Luca Pelissero", "hobby": "Paddle", "gender": "M", "isPro": false },
    { "name": "Bianca Teleman", "hobby": "Volley", "gender": "F", "isPro": false },
    { "name": "Paolo Giordano", "hobby": "Volley", "gender": "M", "isPro": false },
    { "name": "Giada Valinotto", "hobby": "Paddle", "gender": "F", "isPro": false },
    { "name": "Marta Baudracco", "hobby": "Volley", "gender": "F", "isPro": false },
    { "name": "Michele Ghisolfi", "hobby": "Paddle", "gender": "M", "isPro": false },
    { "name": "Martina Velardi", "hobby": "Karate", "gender": "F", "isPro": false },
    { "name": "Ivan Angjelovski", "hobby": "Paddle", "gender": "M", "isPro": false },
    { "name": "Gabriele Leone", "hobby": "Volley", "gender": "M", "isPro": false }
  ]

  hobbies = [
    "Karate",
    "Paddle",
    "Volley",
    "Tennis",
    "Lifting",
    "Basket"
  ];

  studentList:any[] = [];

  studentName:string = "";
  studentGender:string = "M";
  studentHobby:string = "";

  constructor() {
    for (let index = 0; index < 4; index++) {
      let num = Math.floor(Math.random() * this.studentRepository.length);
      let tempStudent = this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num, 1);
    }
  }

  onAddStudent() {
    let newStudent = {
      "name": this.studentName, "hobby": this.studentHobby, "gender": this.studentGender, "isPro": false
    }
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  }

  onDeleteStudent(index:number) {
    this.studentList.splice(index, 1);
  }
}

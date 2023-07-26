import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  employeename: string ="";
  email: string ="";
  password: string ="";
  registrationComplete: boolean = false; 

  constructor(private http: HttpClient )
  {
  }
  save()
  {
    
    this.registrationComplete = true;
    let bodyData = {
      "employeename" : this.employeename,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8085/api/v1/employee/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
    });

    
  }
}

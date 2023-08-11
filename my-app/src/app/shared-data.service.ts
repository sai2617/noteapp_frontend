import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private employeeName: string = ""; // Private property to store the employee name

  constructor() { }

  // Method to set the employee name
  setEmployeeName(name: string): void {
    this.employeeName = name;
  }

  // Method to get the employee name
  getEmployeeName(): string {
    return this.employeeName;
  }
}

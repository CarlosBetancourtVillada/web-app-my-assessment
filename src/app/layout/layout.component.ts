import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  employees: boolean = true;
  devicesVersions: boolean = false;

  isResult: boolean = false;

  searchString: string;
  selectedEmployee: any = {};

  constructor() { }

  ngOnInit() {
  }

  showEmployees(value: string){
    this.devicesVersions = false;
    this.searchString = value;
    this.employees = true;
  }

  showDevicesVersions(value: any){
    console.log(value);
    this.selectedEmployee = value;
    this.devicesVersions = true;
    this.employees = false;
    console.log(this.selectedEmployee);
  }

  showResults(value){
    this.devicesVersions = false;
    this.employees = true;
  }

}

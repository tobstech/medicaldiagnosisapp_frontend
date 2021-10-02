import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  patients: any;
  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
     // get all patient
     let response = this.service.getAllPatients();
     response.subscribe(data => this.patients = data);
  }


}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  patient: any = {patientNo: "", firstname: "", lastname: "", age: null, phoneNumber: "", email: "",
  address: "", gender: "", nextOfKinName: "", nextOfKinPhoneNumber: "", nextOfKinAddress: "", nextOfKinRelationship: ""};
  message : any;

  constructor(
     private service : UserServiceService
  ) { }

  ngOnInit(): void {
  }

  //register patient 
  public registerPatient(){
    let response = this.service.registerPatient(this.patient);
    response.subscribe(data => {
      this.message = data;    
       this.patient = {patientNo: "", firstname: "", lastname: "", age: null, phoneNumber: "", email: "",
  address: "", gender: "", nextOfKinName: "", nextOfKinPhoneNumber: "", nextOfKinAddress: "", nextOfKinRelationship: ""};

    })
  }

}

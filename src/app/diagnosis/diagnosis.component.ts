import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  patientNo : string = "";
  patients : any;
  diagnosisResults : any; 
  patientData : any = { patientNo: "", patientName: "",  patientAge: null, patientGender: ""}

  constructor(
    private service : UserServiceService
  ) { }

  ngOnInit(): void {
  }

  //method to find patient number
  public findByPatientNo(){
    let response = this.service.getPatientByPatientNo(this.patientNo);
    response.subscribe(data => this.patients = data)
  }

  //method to get diagnosis result
  public getDiagnosisResult(patient: any){
    let response = this.service.retrieveDiagnosisResult(patient.patientNo);
    response.subscribe(data => {
      let diagnosisResult: any = data;
      if(diagnosisResult.responseCode == 0){
        this.diagnosisResults = diagnosisResult.diagnosisResultGetResponseList;  
        this.patientData.patientNo = this.diagnosisResults[0].diagnosisResult.patientNo;
        this.patientData.patientName = this.diagnosisResults[0].diagnosisResult.patientName;
        this.patientData.patientAge = this.diagnosisResults[0].diagnosisResult.patientAge;
        this.patientData.patientGender = this.diagnosisResults[0].diagnosisResult.patientGender;
      }else{
        alert(diagnosisResult.responseMessage);
      }
  })

  }


}

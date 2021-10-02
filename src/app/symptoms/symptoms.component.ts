import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { DiagnosisResultServiceService } from '../diagnosis-result-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  patientNo : string = "";
  patients : any;
  symptomsList : any;
  diagnosisrequest: any = {symptoms: "", gender: "", yearOfBirth: null};
  selectedCheckboxes: any [] = [];
  patientReserved : any;
  diagnosisResultList : any;
  symptomName: string = "";
  symptomsListInName: any [] = [];
  mapSymptomsIdAndName: any = new Map();

  constructor(
    private service : UserServiceService,
    private router: Router,
    private diagnosisService : DiagnosisResultServiceService
  ) { }

  ngOnInit(): void {
  }

  //find patient record by patient number
  public findByPatientNo(){
    let response = this.service.getPatientByPatientNo(this.patientNo);
    response.subscribe(data => this.patients = data)
  }
  
  //get symptoms
  public getSymptoms(patientReserve: any){
    let response = this.service.getSymptoms();
    response.subscribe(data => {
      let resp: any = data;
      if(resp.responseCode == 0){
        this.symptomsList = resp.symptomsResponseDetails;
        this.patientReserved = patientReserve;
        console.log(this.patientReserved);
      }
    })
  }

  //check list of selected checkboxed
  checkCheckBoxvalue(event: any){
    console.log(event);
    console.log(event.target.defaultValue);
    console.log(event.target.name);
    if(event.target.checked == true){
        this.selectedCheckboxes.push(parseInt(event.target.defaultValue));
        this.symptomsListInName.push(event.target.name);
    }else{
        this.selectedCheckboxes.forEach((element,index)=>{
            if(element==event.target.defaultValue) 
            this.selectedCheckboxes.splice(index,1);
        });
        this.symptomsListInName.forEach((elementa,indexa)=>{
            if(elementa==event.target.name) 
            this.symptomsListInName.splice(indexa,1);
        });
    }
    console.log(this.selectedCheckboxes);
    console.log(this.symptomsListInName);
  }

  loopSelectedCheckboxes(selectedCheckboxes: any[]){
      for (let index = 0; index < selectedCheckboxes.length; index++) {
        const element = selectedCheckboxes[index];
         console.log(element);
      }
  }

  //get diagnosis result
  public getDiagnosisResult(){
      this.diagnosisrequest.gender = this.patientReserved.gender;
      this.diagnosisrequest.yearOfBirth = this.patientReserved.age;
      this.diagnosisrequest.symptoms = "["+this.selectedCheckboxes+"]";
      console.log(this.diagnosisrequest);
     
      let response = this.service.getDiagnosisResult(this.diagnosisrequest);
      response.subscribe(data => {
          let diagnosis: any = data;
          if(diagnosis.responseCode == 0){
            this.diagnosisResultList = diagnosis.diagnosisResult;            
            console.log(this.diagnosisResultList);
            console.log(this.patientReserved);
           
            // this.diagnosisService.setDataExchangeDiagnosisResultList(this.diagnosisResultList);
            this.diagnosisService.setDataExchangeDiagnosisResultList(this.diagnosisResultList);
            this.diagnosisService.setPatientReserved(this.patientReserved);
            this.diagnosisService.setSelectedCheckboxes(this.selectedCheckboxes);
            this.diagnosisService.setSymptomsListInName(this.symptomsListInName);
            this.router.navigate(['/diagnosis-result']);
          }else{
            alert(diagnosis.responseMessage);
            console.log(diagnosis.responseMessage);
          }
      })
  }



}

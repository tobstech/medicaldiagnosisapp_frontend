import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DiagnosisResultServiceService } from '../diagnosis-result-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-diagnosis-result',
  templateUrl: './diagnosis-result.component.html',
  styleUrls: ['./diagnosis-result.component.scss']
})
export class DiagnosisResultComponent implements OnInit {

  public alertMessage: string = "";
  public dataExchangeDiagnosisResultList: any;
  public selectedCheckboxes: any [] = [];
  public patientReserved : any;
  public symptomsListInName: any [] = [];
  public symptomsString: string = "";
  public validInvalidResultObject: any = {};

  public dataExchangeDiagnosisResultListTwo: string = "";

  public saveDiagnosisRequestParameters: any = { requestPatientReserved: "", requestSelectedCheckboxes: "", requestSymtomsListInName: "", 
                                                    requestDataExchangeDiagnosisResult: "", requestValidInvalidResult: ""}

  constructor(
    private router: Router,
    private service : UserServiceService,
    private diagnosisService : DiagnosisResultServiceService
  ) { }

  ngOnInit(): void {
   this.dataExchangeDiagnosisResultList = this.diagnosisService.getDataExchangeDiagnosisResultList();
   this.patientReserved = this.diagnosisService.getPatientReserved();
   this.selectedCheckboxes = this.diagnosisService.getSelectedCheckboxes();
   this.symptomsListInName = this.diagnosisService.getSymptomsListInName()
   this.symptomsString = this.diagnosisService.getSymptomsListInName().toString();
  }

  //verify checked radio button valid and invalid
  checkRadioButtonValue(event: any){
    let val: string = event.target.defaultValue;
    let name: string = event.target.name;    
    this.validInvalidResultObject[name] = val;
    this.saveDiagnosisRequestParameters.requestValidInvalidResult = JSON.stringify(this.validInvalidResultObject);
  }

  //method to save diagnosis result
  public saveDiagnosisResult(){
      this.saveDiagnosisRequestParameters.requestPatientReserved = JSON.stringify(this.patientReserved);
      this.saveDiagnosisRequestParameters.requestSelectedCheckboxes =  this.selectedCheckboxes.toString();
      this.saveDiagnosisRequestParameters.requestSymtomsListInName = this.symptomsListInName.toString();
      this.saveDiagnosisRequestParameters.requestDataExchangeDiagnosisResult = JSON.stringify(this.dataExchangeDiagnosisResultList);     
      let response = this.service.saveDiagnosisResult(this.saveDiagnosisRequestParameters);
      response.subscribe(data => {
          let result: any = data;
          if(result.responseCode == 0){
            this.alertMessage = result.responseMessage;    
            alert(result.responseMessage);
          }else{
            alert(result.responseMessage);
          }
      })
  }






}
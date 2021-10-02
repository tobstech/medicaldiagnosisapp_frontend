import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisResultServiceService {

  constructor() { }

  public dataExchangeDiagnosisResultList: any;
  public selectedCheckboxes: any [] = [];
  public patientReserved : any;
  public symptomsListInName: any [] = [];

  public setDataExchangeDiagnosisResultList(diagnosisResultList: any){
    this.dataExchangeDiagnosisResultList = diagnosisResultList;
  }
  public getDataExchangeDiagnosisResultList(){
    return this.dataExchangeDiagnosisResultList;
  }
  public setSelectedCheckboxes(selectedCheckboxes: any[]){
    this.selectedCheckboxes = selectedCheckboxes;
  }
  public getSelectedCheckboxes(){
    return this.selectedCheckboxes;
  }
  public setPatientReserved(patientReserved: any){
    this.patientReserved = patientReserved;
  }
  public getPatientReserved(){
    return this.patientReserved;
  }
  public setSymptomsListInName(symptomsListInName: any[]){
    this.symptomsListInName = symptomsListInName;
  }
  public getSymptomsListInName(){
    return this.symptomsListInName;
  }


  



}

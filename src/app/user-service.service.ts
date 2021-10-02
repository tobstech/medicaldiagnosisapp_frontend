import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }
  
  //call user login endpoint
  public userLogin(user: any){
    let endpoint: string = "http://localhost:8080/login/";
    return this.http.post(endpoint, user);
  }

  //call patient registration endpoint
  public registerPatient(patient: any){
    let endpoint: string = "http://localhost:8080/save-patient/";
    return this.http.post(endpoint, patient, {responseType : "text" as "json"});
  }

  //call get all patient endpoint
  public getAllPatients(){
    let endpoint: string = "http://localhost:8080/all-patients/";
    return this.http.get(endpoint);
  }

  //call get patient by patient number endpoint
  public getPatientByPatientNo(patientNo : string){
    let endpoint: string = "http://localhost:8080/patient-like-search/"+patientNo;
    return this.http.get(endpoint);
  }

  //call get symptoms endpoint
  public getSymptoms(){
    let endpoint: string = "http://localhost:8080/symptoms/";
    return this.http.get(endpoint);
  }

  //call get diagnosis result endpoint
  public getDiagnosisResult(diagnosisrequest: any){
    let endpoint: string = "http://localhost:8080/diagnosis/";
    return this.http.post(endpoint, diagnosisrequest);
  }

  //call save diagnosis result endpoint
  public saveDiagnosisResult(saveDiagnosisRequestParameters: any){
    let endpoint: string = "http://localhost:8080/save-diagnosis-result/";
    return this.http.post(endpoint, saveDiagnosisRequestParameters);
  }

  //call retrieve diagnosis result endpoint
  public retrieveDiagnosisResult(patientNo: string){
    let endpoint: string = "http://localhost:8080/retrieve-diagnosis-result/"+patientNo;
    return this.http.get(endpoint);
  }



}

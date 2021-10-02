import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SuccessComponent } from './success/success.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { DiagnosisResultComponent } from './diagnosis-result/diagnosis-result.component';

const routes: Routes = [
  {
    path : "", redirectTo : "login", 
    pathMatch : "full"
  },
  {
    path : "login", component : LoginComponent
  },
  {
    path : "diagnosis", component : DiagnosisComponent
  },
  {
    path : "register-patient", component : RegisterPatientComponent
  },
  {
    path : "symptoms", component : SymptomsComponent
  },
  {
    path : "dashboard", component : UserDashboardComponent
  },
  {
    path : "success", component : SuccessComponent
  },
  {
    path : "all-patients", component : AllPatientsComponent
  },
   {
    path : "diagnosis-result", component : DiagnosisResultComponent
  },

  
  {
    path : "**", component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

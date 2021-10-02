import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { DiagnosisResultComponent } from './diagnosis-result/diagnosis-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterPatientComponent,
    SymptomsComponent,
    DiagnosisComponent,
    UserDashboardComponent,
    SuccessComponent,
    AllPatientsComponent,
    DiagnosisResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

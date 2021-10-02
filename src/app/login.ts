
import { Injectable } from "@angular/core";

@Injectable()
export class Login {

  constructor() {
  }

  private userId: number = 0;
  private username: string = ""; 
  private firstname: string = ""; 
  private lastname: string = ""; 
  private responseCode: number = 0; 
  private responseMessage: string = ""; 

  public setUserID(userId: number){
    this.userId = userId;
  }
  public getUserID(){
    return this.userId;
  }

  public setUsername(username: string){
    this.username = username;
  }
  public getUsername(){
    return this.username;
  }

  public setFirstname(firstname: string){
    this.firstname = firstname;
  }
  public getFirstname(){
    return this.firstname;
  }

  public setLastname(lastname: string){
    this.lastname = lastname;
  }
  public getLastname(){
    return this.lastname;
  }

  public setResponseCode(responseCode: number){
    this.responseCode = responseCode;
  }
  public getResponseCode(){
    return this.responseCode;
  }

  public setResponseMessage(responseMessage: string){
    this.responseMessage = responseMessage;
  }
  public getResponseMessage(){
    return this.responseMessage;
  }

}
